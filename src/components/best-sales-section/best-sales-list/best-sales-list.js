import React from 'react';
import { Link } from "react-router-dom";

const BestSalesList = ({data}) => {
    return (
        <div className="best-sales-list">
            {
                data.map((el) => {
                    return(
                        <Link to={`/device/${el.id}`} className={"list-item"} key={el.id}>
                            <div className="list-img">
                                <img src={el.img} alt="Item"/>
                            </div>
                            <div className="list-model">{el.model}</div>
                            <span className="list-price">Price: {el.price}$
                                <span className="list-price stock-price">Price: {el.stockPrice}$</span>
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default BestSalesList;