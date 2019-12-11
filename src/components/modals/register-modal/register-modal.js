import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import withService from "../../hoc/with-service";
import { updateUser } from "../../../actions";

import "./../modals.sass";

class RegisterModal extends Component {

    state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { ...user } = this.state;
        const { success } = this.state;
        if(success) return;

        this.props.service.checkIn(user)
            .then((data) => {
                if(data.status === -1){
                    this.setState({error: data.error})
                }
                if(data.status === 0){
                    this.setState({
                        error: false,
                        success: true
                    });
                    this.props.updateUser(data.user);
                }
            })
    };

    render() {

        const { close } = this.props;
        const { first_name,
                last_name,
                phone,
                email,
                password,
                confirmPassword,
                error,
                success } = this.state;

        if(success) return <Redirect to={"/"}/>;

        return (
            <div className={"modal-overflow"} onClick={close}>
                <form className="modal register" onSubmit={this.onSubmit} onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <div className={"title"}>Register</div>
                        <div className={"close"} onClick={close}>X</div>
                    </div>
                    <div className="modal-body">
                        <input
                            className={"input"}
                            type="text"
                            required
                            value={first_name}
                            name={"first_name"}
                            onChange={this.onChange}
                            placeholder={"Enter your first name..."}/>
                        <input
                            className={"input"}
                            type="text"
                            required
                            value={last_name}
                            name={"last_name"}
                            onChange={this.onChange}
                            placeholder={"Enter your last name..."}/>
                        <input
                            className={"input"}
                            type="tel"
                            required
                            value={phone}
                            name={"phone"}
                            onChange={this.onChange}
                            placeholder={"Enter your telephone number..."}/>
                        <input
                            className={"input"}
                            type="email"
                            required
                            value={email}
                            name={"email"}
                            onChange={this.onChange}
                            placeholder={"Enter your email..."}/>
                        <input
                            className={"input"}
                            type="password"
                            required
                            value={password}
                            name={"password"}
                            onChange={this.onChange}
                            placeholder={"Create a password..."}/>
                        <input
                            className={"input"}
                            type="password"
                            required
                            value={confirmPassword}
                            name={"confirmPassword"}
                            onChange={this.onChange}
                            placeholder={"Confirm the password..."}/>
                    </div>
                    <div className="modal-error">{ error? error : "" }</div>
                    <div className="modal-footer">
                        <button
                            disabled={success}
                            className="button"
                            type={"submit"}>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {user}
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
    }
};

export default (
    withService(
        connect(mapStateToProps, mapDispatchToProps)(RegisterModal)
    )
)