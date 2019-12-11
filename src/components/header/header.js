import React from 'react'
import './header.sass'
import {NavLink} from "react-router-dom";
import logo from './logo.png'
import {openModal} from "../../actions";
import withService from "../hoc/with-service";
import {connect} from "react-redux";

const Header = ({openModal, user}) => {
    return(
        <div className={"header"}>
            <div className="container">
                <NavLink to = "/" className="logo">
                    <img src={logo} alt="Apple"/>
                </NavLink>
                <nav>
                    <NavLink to={"/catalog/837382"} className="item">Iphone</NavLink>
                    <NavLink to={"/catalog/736726"} className="item">Ipad</NavLink>
                    <NavLink to={"/catalog/111"} className="item">MacBook</NavLink>
                    <NavLink to={"/catalog/222"} className="item">IMac</NavLink>
                    <NavLink to={"/catalog/333"} className="item">Accessories</NavLink>
                    <NavLink to={"/catalog/444"} className="item">Apple Watch</NavLink>
                </nav>
                {
                    user?
                        <div className="login" >Hello, {user.first_name}</div>
                        :
                        <div className={"entry"}>
                            <div className={"login"} onClick={() => openModal('login')}>Login</div>
                            <div className={"register"} onClick={() => openModal('register')}>Register</div>
                        </div>
                }
            </div>
        </div>
    )
};

const mapStateToProps = ({user}) => {
    return {user}
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (name) => dispatch(openModal(name))
    }
};

export default (
        withService(
            connect(mapStateToProps, mapDispatchToProps)(Header)
        )
)

