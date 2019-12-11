import React from 'react'
import "./categories.sass"
import img1 from './categories/macbook.png'
import img2 from './categories/accessories.png'
import img3 from './categories/applewatch.png'
import img4 from './categories/imac.png'
import img5 from './categories/ipad.png'
import img6 from './categories/iphones.png'
import {Link} from "react-router-dom";


const CategoriesSection = () => {
    return(
        <div className={"wrapper categories-section"}>
            <div className="wrap">
                <div className="page-title">Categories</div>
                <div className="categories">
                    <Link to={"/catalog/837382"} className="item">
                        <div className="img">
                            <img src={img6} alt=""/>
                        </div>
                        <div className="title">iPhone</div>
                    </Link>
                    <Link to={"catalog/736726"} className="item">
                        <div className="img">
                            <img src={img5} alt=""/>
                        </div>
                        <div className="title">iPad</div>
                    </Link>
                    <div className="item">
                        <div className="img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="title">MacBook</div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="title">Accessories</div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="title">Applewatch</div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="title">iMac</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategoriesSection