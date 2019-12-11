import React, {Component} from 'react'
import {connect} from "react-redux";
import "./cart-item-page.sass"
import {fetchCurrentDevice} from "../../../actions";
import withService from "../../hoc/with-service";
import {withRouter} from "react-router-dom";

class CartItemPage extends Component {

    componentDidMount() {
        this.props.getCurrentDevice(this.props.id)
    }

    render(){
        const {device} = this.props;
        return(
            <div className = {"product-cart"}>
                <div className="wrap">
                    <div className="page-title">Product Cart</div>
                    <div className="container">
                        <div className="img">
                            <img src={device.img} alt=""/>
                        </div>
                        <div className="content">
                            <div className="item model">{device.model}</div>
                            <div className="item price">Price:
                                <span>
                                    {device.stockPrice? device.stockPrice : device.price}$
                                </span>
                            </div>
                            <div className="item desc">{device.description}</div>
                            <button className="item button">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({currentDevice:device}) => {
    return {device}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        getCurrentDevice: (id) => fetchCurrentDevice(service.getCurrentDevice, dispatch, id)
    }
};

export default (
    withRouter(
        withService(
            connect(mapStateToProps, mapDispatchToProps)(CartItemPage)
        )
    )
)