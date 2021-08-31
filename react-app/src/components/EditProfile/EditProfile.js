import './EditProfile.css'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const EditProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();


    const [image, setImage] = useState(null);


    


    const onSubmit = async (e) => {
        e.preventDefault();

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        
        // aws uploads can be a bit slow—displaying

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

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
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
                        <form className='edit-profile-form'>
                            <div className='settings-label'>Username</div>
                            <input className='settings-input'></input>

                            <div className='settings-label'>Email</div>
                            <input className='settings-input'></input>

                            <div className='settings-label'>Change Password</div>
                            <input className='settings-input-password'></input>
                            <input className='settings-input'></input>

                            <div className='settings-label'>Avatar</div>
                            <div className='avatar-settings-container'></div>
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
                            <div>

                            </div>

                            <div className='save-settings-button'>Button</div>

                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default EditProfile;