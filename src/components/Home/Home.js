import React from 'react';
import OfferCarousel from '../OfferCarousel/OfferCarousel';
import RegularOffer from '../RegularOffer/RegularOffer';
import SideBar from '../SideBar/SideBar';
import "./Home.css"

const Home = () => {
    return (
        <div className="container my-3">
            <div className="homeContainer">
                <div className="sidebarHide  w-25">
                    <SideBar></SideBar>
                </div>
                <div className="w-100 offerImgBox">
                    <OfferCarousel></OfferCarousel>
                </div>
            </div>
            <div className="my-3">
                <RegularOffer></RegularOffer>
            </div>
        </div>
    );
};

export default Home;