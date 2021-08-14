import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faMobileAlt, faQuestionCircle, faStoreAlt, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './TopNavbar.css';

const TopNavbar = () => {
    return (
        <div className="top-navbar bg-white border-bottom topNavbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right d-none d-lg-block">
                        <ul className="list-inline mb-0 py-1 menu-area">
                            <li className="list-inline-item">
                                <a href="#" className="text-reset py-2 d-inline-block">
                                    <FontAwesomeIcon className="mr-1" icon={faExclamationTriangle} />
                                    Notice
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="pl-2 text-reset py-2 d-inline-block">
                                    <FontAwesomeIcon className="mr-1" icon={faQuestionCircle} />
                                    Help
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="pl-2 text-reset py-2 d-inline-block">
                                    <FontAwesomeIcon className="mr-1" icon={faMobileAlt} />
                                    Apps
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="pl-2 text-reset py-2 d-inline-block">
                                    <FontAwesomeIcon className="mr-1" icon={faStoreAlt} />
                                    My Order
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="pl-2 text-reset py-2 d-inline-block">
                                    <FontAwesomeIcon className="mr-1" icon={faTruck} />
                                    Track Order
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="pl-2 d-flex align-items-center text-reset">
                                    <span className="nav-box-text mr-1 d-xl-block">WishList</span>
                                    <span className="flex-grow-1 ml-1">
                                        <span className="badge badge-primary badge-inline badge-pill">0</span>
                                    </span>
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="pl-2 d-flex align-items-center text-reset">
                                    <span className="nav-box-text mr-1 d-none d-xl-block">Compare</span>
                                    <span className="flex-grow-1 ml-1">
                                        <span className="badge badge-primary badge-inline badge-pill">0</span>
                                    </span>
                                </a >
                            </li>

                            <li className="list-inline-item">
                                <a href="#" className="text-reset pl-2 py-2 d-inline-block">
                                    <FontAwesomeIcon className="mr-1" icon={faUserPlus} />
                                    Merchant Account
                                </a >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;