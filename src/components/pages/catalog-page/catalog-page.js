import React, { Component } from 'react'
import withService from "../../hoc/with-service";
import "./catalog-page.sass"
import { Catalog } from "./catalog/catalog";
import { connect } from "react-redux";
import { fetchDevices } from "../../../actions";
import { withRouter } from "react-router-dom";

class CatalogPage extends Component {

    state = {
        min: 0,
        max: 0,
    };

    componentDidMount() {
        this.fetchDevices()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id){
            this.fetchDevices();
        }
    }

    fetchDevices = () => {
        const { fetchDevices, id, catalog:{data={}} } = this.props;
        if(data[this.props.id]) return;
        fetchDevices(id)
    };

    changeMinValue = (e) => {
        const { value } = e.target;
        this.setState({min: Number(value)})
    };

    changeMaxValue = (e) => {
        const { value } = e.target;
        this.setState({max: Number(value)})
    };

    filterPrice = (data=[]) => {
        const { min, max } = this.state;
        return data.filter((el) => {
            if(max === 0) return el.price >= min;
            return el.price >= min && el.price <= max
        });
    } ;

    render(){
        const {catalog: {loading, data}, id } = this.props;
        const filterData = this.filterPrice(data[id]);

        if(loading === true) return <div>Loading...</div>;

        return(
            <div className={"wrapper"}>
                <aside className="aside">
                    <div className="filter">
                        <h3>Цена:</h3>
                        <div className={"filter-wrap"}>
                            <span>От</span>
                            <input
                                className={"filter-option"}
                                onChange={(e) => this.changeMinValue(e)}
                                step={50}
                                type="number"
                            />
                            <span>грн</span>
                        </div>
                        <div className={"filter-wrap"}>
                            <span>До</span>
                            <input
                                className={"filter-option"}
                                onChange={(e) => this.changeMaxValue(e)}
                                step={50}
                                type="number"
                            />
                            <span>грн</span>
                        </div>
                    </div>
                </aside>
                <div className="wrap">
                    <Catalog data={filterData}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({catalog}) => {
    return {catalog}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        fetchDevices: (id) => fetchDevices(service.getDevices, dispatch, id),
    }
};

export default (
    withRouter(
        withService(
            connect(mapStateToProps, mapDispatchToProps)(CatalogPage)
        )
    )
)

