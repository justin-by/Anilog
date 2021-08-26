import './404.css'

const NotFoundPage = () => {

    return (
        <>
            <div className='background-home'>
                <div className='container-home'>
                    <div className='not-found-container'>
                        <div className='not-found-error'>
                            404
                        </div>
                        <div className='not-found-desc'>
                            Sorry! The page you requested couldn't be found.
                        </div>
                        <div className='not-found-video-container'>
                            <video autoplay="autoplay" loop="true" muted className='not-found-video'> 
                                <source src='https://i.imgur.com/ZgJ370K.mp4' type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage;