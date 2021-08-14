import React from 'react';
import OfferCarousel from '../OfferCarousel/OfferCarousel';
import SideBar from '../SideBar/SideBar';
import "./Home.css"

const Home = () => {
    return (
        <div className="container my-3">
            <div className="homeContainer">
                <div className=" w-25">
                    <SideBar></SideBar>
                </div>
                <div className="w-75">
                    <OfferCarousel></OfferCarousel>
                </div>
            </div>
        </div>
    );
};

export default Home;