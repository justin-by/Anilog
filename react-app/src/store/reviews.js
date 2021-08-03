// Define Action Types
const SET_REVIEWS = 'reviews/SET_REVIEWS'


// Define Action Creators
const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    payload: reviews
});




// Define Thunks
export const getAnimeReviews = (animeId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/anime/${animeId}`)

    if (res.ok) {
        const reviews = await res.json();
        dispatch(setReviews(reviews))
    }
}

export const deleteAnimeReview = (reviewId, animeId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}/anime/${animeId}`, {
        method: "DELETE"
    })

    if (res.ok) {
        dispatch(getAnimeReviews(animeId))
    }
}

export const addNewReview = (newReview, animeId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/anime/${animeId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    })
    if (res.ok) {
        dispatch(getAnimeReviews(animeId))
        return null;
    } else {
        const data = await res.json()
        if (data.errors) return data
    }
}

export const updateReview = (newReview, reviewId, animeId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}/anime/${animeId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
    })
    if (res.ok) {
        dispatch(getAnimeReviews(animeId))
        return null;
    } else {
        const data = await res.json()
        if (data.errors) return data
    }
}

const initialState = {};

// Define a reducer
const reviewsReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_REVIEWS:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default reviewsReducer;