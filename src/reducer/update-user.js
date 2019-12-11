export const updateUser = (state, action) => {

    if(state === undefined) {
        return false
    }

    switch (action.type) {
        case "UPDATE_USER":
            return action.payload;
        default:
            return state.user
    }
};