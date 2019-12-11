import React from 'react'
import {Link} from "react-router-dom";

export const Catalog = ({data=[]}) => {
    return(
        <div className="catalog">
            {
                data.map((el) => {
                    return(
                        <Link to={`/device/${el.id}`}  className={"item"} key={el.id}>
                            <div className="img">
                                <img src={el.img} alt="Item"/>
                            </div>
                            <div className="model">{el.model}</div>
                            <div className="price">Price: {el.price}$</div>
                        </Link>
                    )
                })
            }
        </div>
    )
};