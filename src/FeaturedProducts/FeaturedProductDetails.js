import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from "react-slick";

const FeaturedProductDetails = (props) => {
    const{price,id,img,name}=props.featuredProduct;
    
    return (
        <div className="pt-3 ">
            <div className="card-deck w-100 cart ">
                <div class="card">
                    <div className="cartContainer">
                        
                        <img className="card-img-top" src={img} alt="i"/>
                        
                        <div className="cartDetails" >
                            <p  className="showCart text-center"> <FontAwesomeIcon className="mt-2" icon={faHeart} /></p>
                            <p className="showCart text-center" > <FontAwesomeIcon className="mt-2" icon={faSyncAlt} /></p>
                            <p className="showCart text-center " > <FontAwesomeIcon className="mt-2" icon={faShoppingCart} /></p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                        <p className="card-text currencyContainer "> <span className="currency">৳</span>{price}</p>
                    </div>
                </div>  
            </div>
            
        </div>
    );
};

export default FeaturedProductDetails;