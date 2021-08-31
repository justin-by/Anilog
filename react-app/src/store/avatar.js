// Define Action Types
const SET_AVATAR = 'anime/SET_AVATAR'


// Define Action Creators
const setAvatar = (avatar) => ({
    type: SET_AVATAR,
    payload: avatar
});




// Define Thunks
export const getAvatar = (userId) => async (dispatch) => {
    const res = await fetch(`/api/avatar/${userId}`)

    if (res.ok) {
        const avatar = await res.json();
        dispatch(setAvatar(avatar))
    }
}



const initialState = {};

// Define a reducer
const avatarReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_AVATAR:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default avatarReducer;