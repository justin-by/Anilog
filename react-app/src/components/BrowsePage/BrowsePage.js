import './BrowsePage.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import * as animeActions from "../../store/anime";
import { useHistory } from 'react-router-dom';


const BrowsePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const foundAnimes = useSelector((state) => state.animeReducer["animes"]);

    const [showGenreDropdown, setShowGenreDropdown] = useState('none')
    const [showYearsDropdown, setShowYearsDropdown] = useState('none')
    const [showSeasonDropdown, setShowSeasonDropdown] = useState('none')
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState(2021)
    const [season, setSeason] = useState('')

    const filterObj = {}


    useEffect(() => {
        dispatch(animeActions.getAllAnime({ title, genre, year, season }))
    }, [dispatch, genre, title, year, season])

    const seasonFormat = (season) => {
        if (season === 'FALL') {
            return 'Fall'
        } else if (season === 'WINTER') {
            return 'Winter'
        } else if (season === 'SPRING') {
            return 'Spring'
        } else if (season ==='SUMMER') {
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
                                    <i class="fas fa-search"></i>
                                    <input className='search-input' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                                </div>
                            </div>

                            <div>
                                <div className='filter-select-title'>Genres</div>
                                <div className='filter-select'>
                                    {genre ? genre : 'Any'}
                                    <i className="fas fa-chevron-down" onClick={(e) => setShowGenreDropdown(showGenreDropdown === 'block' ? 'none' : 'block')}></i>
                                </div>
                                <ul className='genres-dropdown-container' style={{ display: showGenreDropdown === 'block' ? 'block' : 'none' }}>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Action')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Action
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Adventure')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Adventure
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Comedy')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Comedy
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Drama')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Drama
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Fantasy')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Fantasy
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Horror')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Horror
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Mecha')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Mecha
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Music')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Music
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Mystery')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Mystery
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Romance')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Romance
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Sci-Fi')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Sci-Fi
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Slice of Life')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Slice of Life
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Sports')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Sports
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Supernatural')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Supernatural
                                    </li>
                                    <li className='genres-dropdown-select' onClick={() => {
                                        setGenre('Thriller')
                                        setShowGenreDropdown('none')
                                    }}>
                                        Thriller
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className='filter-select-title'>Year</div>
                                <div className='filter-select season'>
                                    {year}
                                    <i className="fas fa-chevron-down" onClick={(e) => setShowYearsDropdown(showYearsDropdown === 'block' ? 'none' : 'block')}></i>
                                </div>
                                <ul className='years-dropdown-container' style={{ display: showYearsDropdown === 'block' ? 'block' : 'none' }}>

                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2021)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2021
                                    </li>

                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2020)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2020
                                    </li>
                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2019)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2019
                                    </li>

                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2018)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2018
                                    </li>

                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2017)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2017
                                    </li>

                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2016)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2016
                                    </li>

                                    <li className='years-dropdown-select' onClick={() => {
                                        setYear(2015)
                                        setShowYearsDropdown('none')
                                    }}>
                                        2015
                                    </li>


                                </ul>
                            </div>

                            <div>
                                <div className='filter-select-title'>Season</div>
                                <div className='filter-select'>
                                    {season ? seasonFormat(season) : 'Any'}
                                    <i className="fas fa-chevron-down" onClick={(e) => setShowSeasonDropdown(showSeasonDropdown === 'block' ? 'none' : 'block')}></i>
                                </div>
                                <ul className='season-filter-dropdown-container' style={{ display: showSeasonDropdown === 'block' ? 'block' : 'none' }}>

                                    <li className='season-filter-dropdown-select' onClick={() => {
                                        setSeason('WINTER')
                                        setShowSeasonDropdown('none')
                                    }}>
                                        Winter
                                    </li>

                                    <li className='season-filter-dropdown-select' onClick={() => {
                                        setSeason('SPRING')
                                        setShowSeasonDropdown('none')
                                    }}>
                                        Spring
                                    </li>

                                    <li className='season-filter-dropdown-select' onClick={() => {
                                        setSeason('SUMMER')
                                        setShowSeasonDropdown('none')
                                    }}>
                                        Summer
                                    </li>

                                    <li className='season-filter-dropdown-select' onClick={() => {
                                        setSeason('FALL')
                                        setShowSeasonDropdown('none')
                                    }}>
                                        Fall
                                    </li>

                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className='anime-container'>
                        {foundAnimes && foundAnimes.map(anime =>
                        (
                            <div className='anime-card-holder' onClick={() => history.push(`/anime/${anime.id}`)}>
                                <div className='anime-card'
                                    style={{
                                        'background-image': `url(${anime.extraLargePic})`
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