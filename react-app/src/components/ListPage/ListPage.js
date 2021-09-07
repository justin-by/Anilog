import './ListPage.css'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import * as animeListActions from '../../store/listanime'
import { Modal } from '../../context/Modal';
import UpdateAnimeModal from '../UpdateAnimeModal/UpdateAnimeModal';

const ListPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const foundAnime = useSelector((state) => state.animeListReducer["anime"])

    const [status, setStatus] = useState("WATCHED")
    const [showModal, setShowModal] = useState(false);
    const [animeId, setAnimeId] = useState('')
    const [animeListId, setAnimeListId] = useState('')
    const [originalStatus, setOriginalStatus] = useState('')

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
        dispatch(animeListActions.getAnimesByStatus(status))
    }, [dispatch, status])

    return (
        <>
            <div className='background2'>
                <div className='container2'>
                    <div className='list-side-info'>
                        <div className='filter-list-box'>
                            <div className='filter-list-title'>
                                Lists
                            </div>
                            <div className='filter-list' onClick={(e) => setStatus("WATCHED")}>
                                Completed
                            </div>
                            <div className='filter-list' onClick={(e) => setStatus("WATCHING")}>
                                Watching
                            </div>
                            <div className='filter-list' onClick={(e) => setStatus("PLANNING")}>
                                Plan to Watch
                            </div>
                        </div>
                    </div>
                    <div className='lists'>
                        <div className='list-header'>
                            <h3>{status !== 'PLANNING' ? capitalize(status) : 'Planing to Watch'}</h3>
                        </div>
                        <div className='list-section'>
                            <div className='list-head-row'>
                                <div className='list-title'>
                                    Title
                                </div>
                                <div className='list-score'>
                                    Score
                                </div>
                            </div>

                            {foundAnime && foundAnime.map(anime => (
                                <>
                                    <div className='list-entry-row'>
                                        <div className='list-entry-cover'>
                                            <div className='list-entry-img' onClick={() => {
                                                setAnimeId(anime.anime.id)
                                                setAnimeListId(anime.id)
                                                setOriginalStatus(anime.status)
                                                setShowModal(true)
                                            }}
                                                style={{
                                                    'background-image': `url(${anime.anime.mediumPic})`
                                                }}>

                                            </div>
                                        </div>
                                        <div className='list-entry-info-holder'>

                                            <div className='list-entry-title'>
                                                <span className='anime-list-title' onClick={(e) => history.push(`/anime/${anime.anime.id}`)}>
                                                    {anime.anime.title}
                                                </span>
                                            </div>
                                            {anime.rating > 1 ?
                                                <div className='list-entry-score'>
                                                    {anime.rating}/10
                                                </div> : null}


                                        </div>

                                    </div>
                                </>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            {showModal &&
                <Modal onClose={onClose}>
                    <UpdateAnimeModal animeId={animeId} animeListId={animeListId} originalStatus={originalStatus} showModal={showModal} setShowModal={setShowModal} />
                </Modal>
            }
        </>
    )
}

export default ListPage;