export const changeModals = (state, action) => {

    if(state === undefined) {
        return {}
    }

    switch (action.type) {
        case "OPEN_MODAL":
            if(action.payload === 'login') return {loginModal: true};
            if(action.payload === 'register') return {registerModal: true}; break;
        case  "CLOSE_MODAL":
            return {};
        default:
            return state.modals
    }
};