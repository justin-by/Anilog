import ReviewsContent from '../ReviewsContent/ReviewsContent';
import './AnimePage.css'

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import * as animeActions from '../../store/anime'
import * as animeStatusActions from '../../store/animestatus'



const AnimePage = () => {

    const foundAnime = useSelector((state) => state.animeReducer["anime"])
    const foundStatus = useSelector((state) => state.animeStatusReducer["status"])
    const dispatch = useDispatch();

    const { animeId } = useParams();

    const [showDropdown, setShowDropdown] = useState('none')

    const capitalize = (string) => {
        const lower = string.toLowerCase();
        const first = lower.charAt(0)
        const upper = first.toUpperCase();
        const remain = lower.slice(1)
        const final = upper + remain
        return final
    }

    useEffect(() => {
        dispatch(animeActions.getAnime(animeId))
    }, [dispatch])

    useEffect(() => {
        dispatch(animeStatusActions.getAnimeStatus(animeId))
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
                        <div className='anime-page-status'>
                            <a className='anime-status-button'>{foundStatus && capitalize(foundStatus)}</a>
                            <i className="fas fa-chevron-down" onClick={(e) => setShowDropdown(showDropdown === 'block' ? 'none' : 'block')}></i>
                        </div>
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
            <ul className='status-dropdown-container' style={{display: showDropdown === 'block' ? 'block' : 'none'}}>
                <li className='status-dropdown-select' onClick={() => dispatch(animeStatusActions.updateAnimeStatus(animeId, 'WATCHED', {status: "WATCHED"}))}>
                    Set as Complete
                </li>
                <li className='status-dropdown-select' onClick={() => dispatch(animeStatusActions.updateAnimeStatus(animeId, 'WATCHING', {status: "WATCHING"}))}>
                    Set as Watching
                </li>
                <li className='status-dropdown-select' onClick={() => dispatch(animeStatusActions.updateAnimeStatus(animeId, 'PLANNING', {status: "PLANNING"}))}>
                    Set as Planning
                </li>
            </ul>
        </>
    ) : null}
    
}

export default AnimePage;