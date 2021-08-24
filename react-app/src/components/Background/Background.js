import './Background.css'

const HomePage = () => {

    return (
        <>
            <div className='background-home'>
                <div className='container-home'>
                    <div className='home-info-holder'>
                        <div className='welcome-wrapper'>
                            <span className='welcome-text'>Your personal animal platform</span>
                            <div className='welcome-under-wrapper'>
                                <span className='welcome-under-text'>Discover and organize anime in your own personalized list</span>
                            </div>
                        </div>

                        <div className='home-image-wrapper'>
                            <img className='home-image' alt='anime eye' src='https://i.imgur.com/ItMIOyV.png' />
                        </div>

                    </div>
                </div>
                <div className='about-me-links'>
                    <a href='https://github.com/justin-by' target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/ios/100/000000/github--v2.png" alt='github icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/justin-sung-1877921b4/' target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/ios/100/000000/linkedin-2--v2.png" alt='linkedin icon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage;