// Define Action Types
const SET_AVATAR = 'anime/SET_AVATAR'
const RESET_AVATAR = 'anime/RESET_AVATAR'



// Define Action Creators
const setAvatar = (avatar) => ({
    type: SET_AVATAR,
    payload: avatar
});

const resetAvatarAction = () => ({
    type: RESET_AVATAR
});




// Define Thunks
export const getAvatar = (userId) => async (dispatch) => {
    const res = await fetch(`/api/avatar/${userId}`)

    if (res.ok) {
        const avatar = await res.json();
        dispatch(setAvatar(avatar))
    }
}

export const resetAvatar = () => async (dispatch) => {
    console.log('RESET AVATAR')
    dispatch(resetAvatarAction())
}



const initialState = {};

// Define a reducer
const avatarReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case SET_AVATAR:
            newState = action.payload;
            return newState;
        case RESET_AVATAR:
            newState = initialState;
            return newState;
        default:
            return state;
    }
};


// export the reducer
export default avatarReducer;