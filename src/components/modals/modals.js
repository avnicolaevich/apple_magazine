import React from 'react'
import { connect } from "react-redux";

import LogInModal from "./log-in-modal/log-in-modal";
import RegisterModal from "./register-modal/register-modal";
import { closeModal } from "../../actions";

const Modals = ({modals, close}) => {

    const { loginModal, registerModal } = modals;

    if(loginModal) return <LogInModal close={close}/>;
    if(registerModal) return <RegisterModal close={close}/>;

    return ""

};

const mapStateToProps = ({modals}) => {
    return {modals}
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals)

