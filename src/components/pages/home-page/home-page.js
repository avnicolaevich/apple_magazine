import React from 'react';
import SimpleSlider from "../../simple-slider/simple-slider";
import CategoriesSection from "../../categories-section/categories-section";
import BestSalesSection from "../../best-sales-section/best-sales-section";

const HomePage = () => {
    return(
        <>
            <SimpleSlider/>
            <CategoriesSection/>
            <BestSalesSection />
        </>
    )
};

export default HomePage;