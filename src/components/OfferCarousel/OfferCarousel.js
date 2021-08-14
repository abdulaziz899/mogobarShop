import React from 'react';
import "./OfferCarousel.css"

const OfferCarousel = () => {
    return (
        <div style={{marginLeft:"30px"}}>
            <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
                <div class="carousel-inner offerImg">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="https://mogobari.com/public/uploads/all/0vXrQedLnBKLQxCfPe2Hn6gq6jgto4a59CSCcafw.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://mogobari.com/public/uploads/all/pp2AOvLfYvBZ9iymy4kjTyVsdNcUr8CXmjA3AnCM.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://mogobari.com/public/uploads/all/FGUnnRK2mQxRPNiykyROGRekD1WhkJ7YVCjuVGuf.jpg" alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://mogobari.com/public/uploads/all/mTnaflFSb4E8WVY5FYZudW4Gc6LLuPMqTag7e0eW.jpg" alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://mogobari.com/public/uploads/all/2P8bJFNVDKGJkZwddWZ5zywPPTnUGKdT4FIuJu3R.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev prevBtnControl " href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next nextBtnControl" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
    );
};

export default OfferCarousel;