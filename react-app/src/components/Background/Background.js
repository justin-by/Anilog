import './Background.css'

const HomePage = () => {

    return (
        <>
            <div className='background-home'>
                <div className='container-home'>
                    <div className='home-info-holder'>
                        <div className='welcome-wrapper'>
                            <span className='welcome-text'>Your personal anime platform</span>
                            <div className='welcome-under-wrapper'>
                                <span className='welcome-under-text'>Discover and organize anime in your own personalized list</span>
                            </div>
                            <div className='home-logo-container'>
                                <img src='https://i.imgur.com/W6HzdZ5.png' className='home-logo'></img>
                            </div>
                            <div className='about-links-container'>
                                <a href='https://github.com/justin-by' target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github about-link"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/j-sung/' target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in about-link"></i>
                                </a>
                                <a href='https://angel.co/u/justin-sung-6' target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-angellist about-link"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;