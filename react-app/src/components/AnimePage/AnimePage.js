import ReviewsContent from '../ReviewsContent/ReviewsContent';
import './AnimePage.css'

const AnimePage = () => {

    return (
        <>
            <div className='anime-banner'>
                <div className='anime-banner-shadow' />
            </div>
            <div className='anime-desc-background'>
                <div className='anime-desc-container'>
                    <div className='anime-picture'>
                        <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-m5ZMNtFioc7j.png" className='cover' />
                    </div>
                    <div className='anime-desc'>
                        <div className='anime-desc-title'>
                            <a>Placeholder anime title</a>
                        </div>
                        <div className='anime-desc-content'>
                            <p>Placeholder anime desc</p>
                        </div>
                        <div className='anime-nav-links'>
                            <div className='anime-nav-link'>
                                Overview
                            </div>
                            <div className='anime-nav-link'>
                                Reviews
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='background1'>
                <div className='container1'>
                    <div className='anime-side-info'>
                    </div>
                    <div className='main-content-background'>
                        <ReviewsContent />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AnimePage;