// Define Action Types
const SET_REVIEWS = 'reviews/SET_REVIEWS'


// Define Action Creators
const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    reviews
});




// Define Thunks
export const getAnimeReviews = (animeId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/anime/${animeId}`)
    const reviews = await res.json();
    dispatch(setReviews(reviews))
}

const initialState = {
    animeReviews: {},
    userReviews: {}
}
;
// Define a reducer
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            const newState1 = { ...state };
            action.reviews.forEach((review) => {
                newState1.allReviews[review.id] = review;
            })
        default:
            return state;
    }
};


// export the reducer
export default reviewsReducer;