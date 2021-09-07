import './BrowsePage.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as animeActions from "../../store/anime";
import { useHistory } from 'react-router-dom';
import * as animeStatusActions from '../../store/animestatus'


const BrowsePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const foundAnimes = useSelector((state) => state.animeReducer["animes"]);

    const [showGenreDropdown, setShowGenreDropdown] = useState('none')
    const [showYearsDropdown, setShowYearsDropdown] = useState('none')
    const [showSeasonDropdown, setShowSeasonDropdown] = useState('none')

    const [title, setTitle] = useState(null)
    const [genre, setGenre] = useState(null)
    const [year, setYear] = useState(2021)
    const [season, setSeason] = useState(null)




    const filterObj = () => {
        if (title && genre && year && season) {
            return { title, genre, year, season }
        } else if (title && genre && year) {
            return { title, genre, year }
        } else if (title && genre && season) {
            return { title, genre, season }
        } else if (title && year && season) {
            return { title, year, season }
        } else if (genre && year && season) {
            return { genre, year, season }
        } else if (title && genre) {
            return { title, genre }
        } else if (title && year) {
            return { title, year }
        } else if (title && season) {
            return { title, season }
        } else if (genre && year) {
            return { genre, year }
        } else if (genre && season) {
            return { genre, season }
        } else if (year && season) {
            return { year, season }
        } else if (title) {
            return { title }
        } else if (genre) {
            return { genre }
        } else if (year) {
            return { year }
        } else if (season) {
            return { season }
        }
    }


    useEffect(() => {
        dispatch(animeActions.getAllAnime(filterObj()))
    }, [dispatch, genre, title, year, season])

    useEffect(() => {
        dispatch(animeStatusActions.resetAnimeStatus())
    }, [dispatch])

    const seasonFormat = (season) => {
        if (season === 'FALL') {
            return 'Fall'
        } else if (season === 'WINTER') {
            return 'Winter'
        } else if (season === 'SPRING') {
            return 'Spring'
        } else if (season === 'SUMMER') {
            return 'Summer'
        }
    }

    return (
        <>
            <div className='background'>
                <div className='container'>
                    <div className='filters-wrapper'>
                        <div className='filters-container'>
                            <div>
                                <div className='filter-select-title'>Search</div>
                                <div className='filter-select-search'>
                                    <i className="fas fa-search"></i>
                                    <input className='search-input' value={title ? title : undefined} onChange={(e) => setTitle(e.target.value)}></input>
                                </div>
                            </div>

                            <div>
                                <div className='filter-select-title'>Genres</div>
                                <div className='filter-select'>
                                    {genre ? genre : 'Any'}
                                    <div>

                                        <i className="fas fa-chevron-down" onClick={(e) => setShowGenreDropdown(showGenreDropdown === 'block' ? 'none' : 'block')}></i>
                                        <ul className='genres-dropdown-container' style={{ display: showGenreDropdown === 'block' ? 'block' : 'none' }}>
                                            <li className='genres-dropdown-select' key='action' onClick={() => {
                                                setGenre('Action')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Action
                                            </li>
                                            <li className='genres-dropdown-select' key='adventure' onClick={() => {
                                                setGenre('Adventure')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Adventure
                                            </li>
                                            <li className='genres-dropdown-select' key='comedy' onClick={() => {
                                                setGenre('Comedy')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Comedy
                                            </li>
                                            <li className='genres-dropdown-select' key='drama' onClick={() => {
                                                setGenre('Drama')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Drama
                                            </li>
                                            <li className='genres-dropdown-select' key='fantasy' onClick={() => {
                                                setGenre('Fantasy')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Fantasy
                                            </li>
                                            <li className='genres-dropdown-select' key='horror' onClick={() => {
                                                setGenre('Horror')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Horror
                                            </li>
                                            <li className='genres-dropdown-select' key='mecha' onClick={() => {
                                                setGenre('Mecha')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Mecha
                                            </li>
                                            <li className='genres-dropdown-select' key='music' onClick={() => {
                                                setGenre('Music')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Music
                                            </li>
                                            <li className='genres-dropdown-select' key='mystery' onClick={() => {
                                                setGenre('Mystery')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Mystery
                                            </li>
                                            <li className='genres-dropdown-select' key='romance' onClick={() => {
                                                setGenre('Romance')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Romance
                                            </li>
                                            <li className='genres-dropdown-select' key='sci-fi' onClick={() => {
                                                setGenre('Sci-Fi')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Sci-Fi
                                            </li>
                                            <li className='genres-dropdown-select' key='slice-of-life' onClick={() => {
                                                setGenre('Slice of Life')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Slice of Life
                                            </li>
                                            <li className='genres-dropdown-select' key='sports' onClick={() => {
                                                setGenre('Sports')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Sports
                                            </li>
                                            <li className='genres-dropdown-select' key='supernatural' onClick={() => {
                                                setGenre('Supernatural')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Supernatural
                                            </li>
                                            <li className='genres-dropdown-select' key='thriller' onClick={() => {
                                                setGenre('Thriller')
                                                setShowGenreDropdown('none')
                                            }}>
                                                Thriller
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div>
                                <div className='filter-select-title'>Year</div>
                                <div className='filter-select season'>
                                    {year}
                                    <div>
                                        <i className="fas fa-chevron-down" onClick={(e) => setShowYearsDropdown(showYearsDropdown === 'block' ? 'none' : 'block')}></i>
                                        <ul className='years-dropdown-container' style={{ display: showYearsDropdown === 'block' ? 'block' : 'none' }}>

                                            <li className='years-dropdown-select' key='2021' onClick={() => {
                                                setYear(2021)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2021
                                            </li>

                                            <li className='years-dropdown-select' key='2020' onClick={() => {
                                                setYear(2020)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2020
                                            </li>
                                            <li className='years-dropdown-select' key='2019' onClick={() => {
                                                setYear(2019)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2019
                                            </li>

                                            <li className='years-dropdown-select' key='2018' onClick={() => {
                                                setYear(2018)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2018
                                            </li>

                                            <li className='years-dropdown-select' key='2017' onClick={() => {
                                                setYear(2017)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2017
                                            </li>

                                            <li className='years-dropdown-select' key='2016' onClick={() => {
                                                setYear(2016)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2016
                                            </li>

                                            <li className='years-dropdown-select' key='2015' onClick={() => {
                                                setYear(2015)
                                                setShowYearsDropdown('none')
                                            }}>
                                                2015
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div>
                                <div className='filter-select-title'>Season</div>
                                <div className='filter-select'>
                                    {season ? seasonFormat(season) : 'Any'}
                                    <div>
                                        <i className="fas fa-chevron-down" onClick={(e) => setShowSeasonDropdown(showSeasonDropdown === 'block' ? 'none' : 'block')}></i>
                                        <ul className='season-filter-dropdown-container' style={{ display: showSeasonDropdown === 'block' ? 'block' : 'none' }}>

                                            <li className='season-filter-dropdown-select' key='winter' onClick={() => {
                                                setSeason('WINTER')
                                                setShowSeasonDropdown('none')
                                            }}>
                                                Winter
                                            </li>

                                            <li className='season-filter-dropdown-select' key='spring' onClick={() => {
                                                setSeason('SPRING')
                                                setShowSeasonDropdown('none')
                                            }}>
                                                Spring
                                            </li>

                                            <li className='season-filter-dropdown-select' key='summer' onClick={() => {
                                                setSeason('SUMMER')
                                                setShowSeasonDropdown('none')
                                            }}>
                                                Summer
                                            </li>

                                            <li className='season-filter-dropdown-select' key='fall' onClick={() => {
                                                setSeason('FALL')
                                                setShowSeasonDropdown('none')
                                            }}>
                                                Fall
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='anime-container'>
                        {foundAnimes && foundAnimes.map(anime =>
                        (
                            <div className='anime-card-holder' key={anime.id} onClick={() => history.push(`/anime/${anime.id}`)}>
                                <div className='anime-card'
                                    style={{
                                        'backgroundImage': `url(${anime.extraLargePic})`
                                    }}>

                                </div>
                                <div className='anime-card-name'>
                                    {anime.title}
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>

        </>
    )
}

export default BrowsePage;