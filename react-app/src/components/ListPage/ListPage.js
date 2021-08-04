import './ListPage.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as animeListActions from '../../store/listanime'

const ListPage = () => {
    const dispatch = useDispatch();
    const foundAnime = useSelector((state) => state.animeReducer["anime"])
    const [status, setStatus] = useState("WATCHED")

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
                            <h3>Completed</h3>
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
                                            <div className='list-entry-img' style={{
                                                background: `url(${anime.anime.mediumPic})`
                                            }}>

                                            </div>
                                        </div>
                                        <div className='list-entry-title'>
                                            <a>
                                                {anime.anime.title}
                                            </a>
                                        </div>
                                        <div className='list-entry-score'>
                                            {anime.rating}/10
                                        </div>
                                    </div>
                                </>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListPage;