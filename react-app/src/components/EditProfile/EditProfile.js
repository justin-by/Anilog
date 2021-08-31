import './EditProfile.css'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as avatarActions from "../../store/avatar";



const EditProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const foundAvatar = useSelector((state) => state.avatarReducer["avatar"])
    const sessionUser = useSelector((state) => state.session.user);
    console.log(`FFFFFFFFFFFFF ${foundAvatar}`)

    const [image, setImage] = useState(null);

    useEffect(() => {
        dispatch(avatarActions.getAvatar(sessionUser.id))
    }, [])





    const onSubmit = async (e) => {
        e.preventDefault();

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying

        if (foundAvatar) {
            const res = await fetch('/api/images', {
                method: "PATCH",
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

        } else {

            const res = await fetch('/api/images', {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                await res.json()
                history.push("/images");
            }
            else {
                // a real app would probably use more advanced
                // error handling
                console.log("error");
            }
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const onChangeCalls = (e) => {
        updateImage(e);
        handleSubmit(e);
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
                                    background: `url(${foundAvatar && foundAvatar.url})`
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