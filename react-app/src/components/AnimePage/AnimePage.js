import ReviewsContent from '../ReviewsContent/ReviewsContent';
import './AnimePage.css'

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import * as animeActions from '../../store/anime'



const AnimePage = () => {

    const foundAnime = useSelector((state) => state.animeReducer["anime"])
    const dispatch = useDispatch();

    const { animeId } = useParams();

    useEffect(() => {
        dispatch(animeActions.getAnime(animeId))
    }, [dispatch])

    {return foundAnime ? (
        <>
            <div className='anime-banner' style={{
              background: `url(${foundAnime.bannerPic})`,
            }}>
                <div className='anime-banner-shadow' />
            </div>
            <div className='anime-desc-background'>
                <div className='anime-desc-container'>
                    <div className='anime-picture'>
                        <img src={foundAnime.extraLargePic} className='cover' />
                    </div>
                    <div className='anime-desc'>
                        <div className='anime-desc-title'>
                            <a>{foundAnime.title}</a>
                        </div>
                        <div className='anime-desc-content'>
                            <p>{foundAnime.desc}</p>
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
            <div className='background3'>
                <div className='container3'>
                    <div className='anime-side-info'>
                    </div>
                    <div className='main-content-background'>
                        <ReviewsContent />
                    </div>

                </div>
            </div>
        </>
    ) : null}
    
}

export default AnimePage;