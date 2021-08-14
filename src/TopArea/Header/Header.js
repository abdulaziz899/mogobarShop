import { faSearch, faShoppingCart, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/Wn6RUH9JSd0qJHUD6noK1982LBgHC3J1vTFTlYKt.png';
import './Header.css';

const Header = () => {
    return (
        <header className="sticky-top header-area z-1020 bg-white border-bottom shadow-sm">
            <div className="top-area">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="pr-5">
                            <a href="#" className="mr-5">
                                <img src={logo} alt="" className="logo" />
                            </a>
                        </div> 

                        <div className="form-area">
                            <form action="">
                                <div className="searchArea">
                                    <input type="text" className="form-control" placeholder="I am shopping for ..." />

                                    <div className="d-none d-lg-block">
                                        <button className="button btn">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="d-none auth-area d-lg-block ml-3 mr-0">
                            <li className="list-inline-item mr-1">
                                <a href="#" className="text-reset py-2 d-inline-block "><FontAwesomeIcon icon={faSignInAlt} /> Login</a>
                            </li>
                            <br/>
                            <li className="list-inline-item">
                                <a href="#" className="text-reset py-2 d-inline-block "><FontAwesomeIcon icon={faUser} /> Registration</a>
                            </li>
                        </div>

                        <div className="d-none d-lg-block  align-self-stretch ml-4 mr-0" data-hover="dropdown">
                            <div className="cart-box dropdown h-100" id="cart_items">
                                <a href="#" className="d-flex align-items-center text-reset h-100" data-toggle="dropdown" data-display="static">
                                    <FontAwesomeIcon style={{color: "#207567;"}} icon={faShoppingCart} />
                                    
                                    <span className="flex-grow-1 ml-1">
                                        <span className="badge badgeColor badge-inline badge-pill">0</span>
                                        <span style={{color: "#207567;"}} className="d-none d-xl-block"><strong>Cart</strong></span>
                                    </span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation">
                                    <div className="text-center p-3">
                                        <i className="las la-frown la-3x opacity-60 mb-3"></i>
                                        <h3 className="h6 fw-700">Your Cart is empty</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-white border-top py-1 navbar-area border-gray-200 py-1">
                <div className="container">
                    <ul className="list-inline mb-0 pl-0 text-center">
                        <li className="list-inline-item mr-0">
                            <a href="#" className="px-4 py-2 d-inline-block text-reset">Home</a>
                        </li>

                        <li className="list-inline-item mr-0">
                            <a href="#" className="d-inline-block text-reset">All Cetagoris</a>
                        </li>

                        <li className="list-inline-item mr-0">
                            <a href="#" className="d-inline-block text-reset">All Brand</a>
                        </li>

                        <li className="list-inline-item mr-0">
                            <a href="#" className="d-inline-block text-reset">All Shop</a>
                        </li>

                        <li className="list-inline-item mr-0">
                            <a href="#" className="d-inline-block text-reset">Offers</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;