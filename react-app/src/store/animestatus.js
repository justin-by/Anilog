// Define Action Types
const SET_STATUS = 'anime/SET_STATUS'
const RESET_STATUS = 'anime/RESET_STATUS'


// Define Action Creators
const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status
});

const resetStatus = (status) => ({
    type: SET_STATUS,
    payload: status
});




// Define Thunks
export const resetAnimeStatus = () => async (dispatch) => {

    dispatch(resetStatus({}))
}



export const getAnimeStatus = (animeId) => async (dispatch) => {
    const res = await fetch(`/api/animelist/${animeId}/status`)

    if (res.ok) {
        const status = await res.json();
        dispatch(setStatus(status))
    }
}

export const updateAnimeStatus = (animeId, status, statusObj) => async (dispatch) => {
    const res = await fetch(`/api/animelist/${animeId}/status/${status}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(statusObj)
    })

    if (res.ok) {
        const status = await res.json();
        dispatch(setStatus(status))
    }
}


const initialState = {};

// Define a reducer
const animeStatusReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_STATUS:
            newState = action.payload;
            return newState;
        case RESET_STATUS:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default animeStatusReducer;