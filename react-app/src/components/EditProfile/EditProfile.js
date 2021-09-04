import './EditProfile.css'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../../store/session";

import * as sessionActions from "../../store/session"



const EditProfile = () => {

    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const [image, setImage] = useState(null);
    const [profileImg, setProfileImg] = useState();
    const [url, setUrl] = useState();

    const [username, setUsername] = useState(sessionUser.username)
    const [email, setEmail] = useState(sessionUser.email)
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [errors, setErrors] = useState();



    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const onSubmit = async ({ username, email, password, repeatPassword }) => {
        const data = await dispatch(updateUser(username, email, password, repeatPassword, sessionUser.id))
        if (data) {
            setErrors(data);
        } else {
            setErrors();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying

        if (sessionUser.avatar) {
            const res = await fetch('/api/images', {
                method: "PATCH",
                body: formData,
            });
            if (res.ok) {
                const urlObj = await res.json();
                setUrl(urlObj['url']);
                console.log(url);
            }
            else {
                // a real app would probably use more advanced
                // error handling
                console.log("error");
            }

        } else {

            const res = await fetch('/api/images', {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                await res.json()
            }
            else {
                // a real app would probably use more advanced
                // error handling
                console.log("error");
            }
        }
    }

    useEffect(() => {
        dispatch(sessionActions.authenticate(sessionUser.id))
    }, [url, sessionUser.username, sessionUser.email])

    useEffect(() => {

    })

    const updateImage = (e) => {
        const file = e.target.files[0];
        imageHandler(e)
        setImage(file);
    }

    const determineImage = () => {
        if (profileImg) {
            return profileImg
        } else if (sessionUser.avatar) {
            return sessionUser.avatar.url
        } else {
            return 'https://i.imgur.com/HnMCw1S.png'
        }
    }

    return (
        <>
            <div className='background-home'>
                <div className='container-settings'>

                    {errors && errors.length > 0 ? (
                        <div className='errors-message-div'>
                            <i className="fas fa-times" onClick={() => setErrors()}></i>
                            <span className='review-error'>Oops!</span>
                            {errors.map((error, ind) => (
                                <p key={ind} className='error-update-message'>{error}</p>
                            ))}
                            
                        </div>
                    ) : null}

                    <div className='settings-menu'>
                        <div className='settings-title'>Settings</div>
                        <div className='settings-select'>Account</div>
                    </div>

                    <div className='settings-info-holder'>
                        <div className='edit-profile-form'>
                            <div className='settings-label'>Username</div>
                            <input className='settings-input'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}>

                            </input>

                            <div className='settings-label'>Email</div>
                            <input className='settings-input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>

                            <div className='settings-label'>Change Password</div>
                            <input className='settings-input-password'
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Enter password'
                            ></input>
                            <input className='settings-input'
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                type='password'
                                placeholder='Confirm password'
                            ></input>

                            <div className='save-settings-button' onClick={(e) => onSubmit({ username, email, password, repeatPassword })}>Save</div>

                            <div className='settings-label'>Avatar</div>
                            <div className='avatar-settings-container'></div>
                            <form onSubmit={handleSubmit} className='avatar-form'>


                                <div className='avatar-input-container'>
                                    <input
                                        className='avatar-input'
                                        type="file"
                                        accept="image/*"
                                        onChange={updateImage} />
                                    <p className='avatar-click-text'>
                                        Click to upload
                                    </p>
                                </div>

                                <div className='avatar-example-container' style={{
                                    'backgroundImage': `url(${determineImage()})`
                                }}>
                                </div>

                            </form>
                            <button className='save-avatar-button' type='submit'>Submit</button>
                            <div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default EditProfile;