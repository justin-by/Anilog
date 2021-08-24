import './AnimeOverview.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import React from 'react'
import ReactPlayer from 'react-player'
import * as characterActions from "../../../store/characters";



const AnimeOverview = () => {

    const foundAnime = useSelector((state) => state.animeReducer["anime"])
    const characters = useSelector((state) => state.charactersReducer["characters"])
    const dispatch = useDispatch();
    const { animeId } = useParams();

    useEffect(() => {
        dispatch(characterActions.getCharacters(animeId))
    }, [dispatch, animeId])




    return (
        <>
            <div className='overview-content'>
                <div className='anime-trailer-div'>
                    <ReactPlayer url={foundAnime.trailer} volume={.5} />
                </div>

                <div className='character-header-holder'>
                    <h2 className='character-header'>Characters</h2>
                </div>
                <div className='characters-container'>

                    {characters && characters.map(character => (

                        <div className='character-card'>

                            <div className='character-card-img' style={{
                                'background-image': `url(${character.largePic})`
                            }}>
                            </div>
                            <div className='character-card-body'>
                                <div className='character-name'>
                                    {character.fullName}
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default AnimeOverview;