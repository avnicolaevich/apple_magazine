export const createCurrentDevice = (state, action) => {

    if(state === undefined) {
        return {}
    }

    switch (action.type) {
        case "CREATE_CURRENT_DEVICE":
            return action.payload;
        default:
            return state.currentDevice
    }
};