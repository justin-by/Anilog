// Define Action Types
const SET_CHARACTERS = 'reviews/SET_CHARACTERS'


// Define Action Creators
const setCharacters = (characters) => ({
    type: SET_CHARACTERS,
    payload: characters
});




// Define Thunks
export const getCharacters = (animeId) => async (dispatch) => {
    const res = await fetch(`/api/characters/anime/${animeId}`)

    if (res.ok) {
        const characters = await res.json();
        dispatch(setCharacters(characters))
    }
}

const initialState = {};

// Define a reducer
const charactersReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_CHARACTERS:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default charactersReducer;