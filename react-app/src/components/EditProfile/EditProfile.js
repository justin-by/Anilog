import './EditProfile.css'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import * as sessionActions from "../../store/session"



const EditProfile = () => {

    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const [image, setImage] = useState(null);
    const [profileImg, setProfileImg] = useState();
    const [url, setUrl] = useState();



    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const onSubmit = async (e) => {
        e.preventDefault();

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
    }, [url])

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

                    <div className='settings-menu'>
                        <div className='settings-title'>Settings</div>
                        <div className='settings-select'>Account</div>
                    </div>

                    <div className='settings-info-holder'>
                        <div className='edit-profile-form'>
                            <div className='settings-label'>Username</div>
                            <input className='settings-input'></input>

                            <div className='settings-label'>Email</div>
                            <input className='settings-input'></input>

                            <div className='settings-label'>Change Password</div>
                            <input className='settings-input-password'></input>
                            <input className='settings-input'></input>

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

                                <button type='submit'>Submit</button>
                            </form>
                            <div>

                            </div>

                            <div className='save-settings-button'>Button</div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default EditProfile;