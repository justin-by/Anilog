import './Background.css'

const HomePage = () => {

    return (
        <>
            <div className='background-home'>
                <div className='container-home'>
                    <div className='home-info-holder'>
                        <div className='welcome-wrapper'>
                            <a className='welcome-text'>Your personal animal platform</a>
                            <div className='welcome-under-wrapper'>
                                <a className='welcome-under-text'>Discover and organize anime in your own personalized list</a>
                            </div>
                        </div>

                        <div className='home-image-wrapper'>
                            <img className='home-image' src='https://i.imgur.com/ItMIOyV.png' />
                        </div>

                    </div>
                </div>
                <div className='about-me-links'>
                    <a href='https://github.com/justin-by' target="_blank">
                        <img src="https://img.icons8.com/ios/100/000000/github--v2.png" />
                    </a>
                    <a href='https://www.linkedin.com/in/justin-sung-1877921b4/' target="_blank">
                        <img src="https://img.icons8.com/ios/100/000000/linkedin-2--v2.png" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage;