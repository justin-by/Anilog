// Define Action Types
const SET_ANIME = 'anime/SET_ANIME'


// Define Action Creators
const setAnime = (animes) => ({
    type: SET_ANIME,
    payload: animes
});




// Define Thunks
export const getAnimesByStatus = (status) => async (dispatch) => {
    const res = await fetch(`/api/animelist/status=${status}`)

    if (res.ok) {
        const animes = await res.json();
        dispatch(setAnime(animes))
    }
}


const initialState = {};

// Define a reducer
const animeListReducer = (state = initialState, action) => {
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
export default animeListReducer;