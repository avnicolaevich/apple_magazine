import React, {Component} from 'react';
import './best-sales-section.sass'
import {connect} from "react-redux";
import {fetchBestSales} from "../../actions";
import withService from "../hoc/with-service";
import BestSalesList from "./best-sales-list/best-sales-list";


class BestSalesSection extends Component {

    componentDidMount() {
        this.props.fetchBestSales();
    }

    render() {

        const { bestSales: { data, loading } } = this.props;

        if(loading === true) return <div>Loading...</div>;

        return (
            <div className={"wrapper best-sales-section"}>
            <div className="wrap">
                <div className="page-title">Best Sales</div>
                <BestSalesList data = { data } />
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({bestSales}) => {
    return {bestSales}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        fetchBestSales: () => fetchBestSales(service.getBestSales, dispatch),
    }
};

export default withService(connect(mapStateToProps, mapDispatchToProps)(BestSalesSection));