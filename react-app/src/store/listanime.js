// Define Action Types
const SET_ANIME1 = 'anime/SET_ANIME1'


// Define Action Creators
const setAnime1 = (animes) => ({
    type: SET_ANIME1,
    payload: animes
});


// Define Thunks
export const getAnimesByStatus = (status) => async (dispatch) => {
    const res = await fetch(`/api/animelist/status=${status}`)

    if (res.ok) {
        const animes = await res.json();
        dispatch(setAnime1(animes))
    }
}

export const deleteAnime = (animeListId, originalStatus) => async (dispatch) => {
    const res = await fetch(`/api/animelist/${animeListId}`, {
        method: "DELETE"
    })

    if (res.ok) {
        dispatch(getAnimesByStatus(originalStatus))
    }
}


export const addNewAnime = (newAnime, animeId, status) => async (dispatch) => {
    const res = await fetch(`/api/animelist/${animeId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnime)
    })
    if (res.ok) {
        dispatch(getAnimesByStatus(status))
        return null;
    } else {
        const data = await res.json()
        if (data.errors) return data
    }
}

export const updateAnime = (newAnime, animeListId, originalStatus) => async (dispatch) => {
    const res = await fetch(`/api/animelist/${animeListId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnime)
    })
    if (res.ok) {
        dispatch(getAnimesByStatus(originalStatus))
        return null;
    } else {
        const data = await res.json()
        if (data.errors) return data
    }
}



const initialState = {};

// Define a reducer
const animeListReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_ANIME1:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default animeListReducer;