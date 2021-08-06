import ReviewsContent from '../ReviewsContent/ReviewsContent';
import AnimeOverview from '../AddAnimeModal/AnimeOverview/AnimeOverview';
import './AnimePage.css'

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import * as animeActions from '../../store/anime'
import * as animeStatusActions from '../../store/animestatus'
import AddAnimeModal from '../AddAnimeModal/AddAnimeModal';
import { Modal } from '../../context/Modal';



const AnimePage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const foundAnime = useSelector((state) => state.animeReducer["anime"])
    const foundStatus = useSelector((state) => state.animeStatusReducer["status"])
    const dispatch = useDispatch();

    const { animeId } = useParams();

    const [showDropdown, setShowDropdown] = useState('none')
    const [showModal, setShowModal] = useState(false);
    const [showTab, setShowTab] = useState('overview')
    const [status, setStatus] = useState(foundStatus)

    const capitalize = (string) => {
        const lower = string.toLowerCase();
        const first = lower.charAt(0)
        const upper = first.toUpperCase();
        const remain = lower.slice(1)
        const final = upper + remain
        return final
    }

    const onClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        dispatch(animeActions.getAnime(animeId))
    }, [dispatch, animeId])

    useEffect(() => {
        dispatch(animeStatusActions.getAnimeStatus(animeId))
        setStatus(foundStatus)
    }, [dispatch, foundStatus])



    {
        return foundAnime ? (
            <>
                <div className='anime-banner' style={{
                    background: `url(${foundAnime.bannerPic})`
                }}>
                    <div className='anime-banner-shadow' />
                </div>
                <div className='anime-desc-background'>
                    <div className='anime-desc-container'>
                        <div className='anime-picture'>
                            <img src={foundAnime.extraLargePic} className='cover' />
                            <div className='anime-page-status'>
                                <a className='anime-status-button'>{status ? capitalize(status) : (
                                    <a onClick={() =>
                                        setShowModal(true)
                                    }>Add to List</a>
                                )}</a>
                                {sessionUser && status && (
                                    <i className="fas fa-chevron-down" onClick={(e) => setShowDropdown(showDropdown === 'block' ? 'none' : 'block')}></i>
                                )}

                            </div>
                        </div>
                        <div className='anime-desc'>
                            <div className='anime-desc-title'>
                                <a>{foundAnime.title}</a>
                            </div>
                            <div className='anime-desc-content'>
                                <p dangerouslySetInnerHTML={{ __html: `${foundAnime.desc}` }}></p>
                            </div>
                            <div className='anime-nav-links'>
                                <div className='anime-nav-link' onClick={() => setShowTab('overview')}>
                                    Overview
                                </div>
                                <div className='anime-nav-link' onClick={() => setShowTab('reviews')}>
                                    Reviews
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='background3'>
                    <div className='container3'>
                        <div className='anime-side-info'>
                            <div className='anime-rating-holder'>
                                <a className='anime-info-text-rating'><i class="fas fa-star"></i> #{foundAnime.ranking} Highest Rated All Time</a>
                            </div>
                            <div className='anime-info-box'>
                                <div className='anime-info-section'>
                                    <a className='anime-info-text'>Episodes</a>
                                    <a className='anime-info-text'>{foundAnime.episodes}</a>
                                </div>
                                <div className='anime-info-section'>
                                    <a className='anime-info-text'>Season</a>
                                    <a className='anime-info-text'>{foundAnime.season}</a>
                                </div>
                                <div className='anime-info-section'>
                                    <a className='anime-info-text'>Year</a>
                                    <a className='anime-info-text'>{foundAnime.year}</a>
                                </div>
                                <div className='anime-info-section'>
                                    <a className='anime-info-text'>Synonyms</a>
                                    <a className='anime-info-text'>{foundAnime.title}</a>
                                    <a className='anime-info-text'>{foundAnime.japTitle}</a>
                                </div>
                            </div>
                        </div>
                        <div className='main-content-background'>
                            {showTab && showTab === 'reviews' ? (
                                <ReviewsContent />

                            ) : <AnimeOverview />}

                        </div>

                    </div>
                </div>
                <ul className='status-dropdown-container' style={{ display: showDropdown === 'block' ? 'block' : 'none' }}>
                    <li className='status-dropdown-select' onClick={() => dispatch(animeStatusActions.updateAnimeStatus(animeId, 'WATCHED', { status: "WATCHED" }))}>
                        Set as Complete
                    </li>
                    <li className='status-dropdown-select' onClick={() => dispatch(animeStatusActions.updateAnimeStatus(animeId, 'WATCHING', { status: "WATCHING" }))}>
                        Set as Watching
                    </li>
                    <li className='status-dropdown-select' onClick={() => dispatch(animeStatusActions.updateAnimeStatus(animeId, 'PLANNING', { status: "PLANNING" }))}>
                        Set as Planning
                    </li>
                </ul>
                {showModal &&
                    <Modal onClose={onClose}>
                        <AddAnimeModal animeId={animeId} showModal={showModal} setShowModal={setShowModal} />
                    </Modal>
                }
            </>
        ) : null
    }

}

export default AnimePage;