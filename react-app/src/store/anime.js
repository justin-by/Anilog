// Define Action Types
const SET_ANIME = 'anime/SET_ANIME'


// Define Action Creators
const setAnime = (anime) => ({
    type: SET_ANIME,
    payload: anime
});




// Define Thunks
export const getAnime = (animeId) => async (dispatch) => {
    const res = await fetch(`/api/anime/${animeId}`)

    if (res.ok) {
        const anime = await res.json();
        dispatch(setAnime(anime))
    }
}


const initialState = {};

// Define a reducer
const animeReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_ANIME:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default animeReducer;