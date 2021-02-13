import { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "./Workshop.css"

const Workshop = () => {

    document.body.style.backgroundColor = "#0F2028";

    return (
        <div>
            <div className="absolute-navbar">
                <img id="iiit" src="iiit.png" alth="IIIT" />
                <div className="text-center">
                    <img id="qualcomm" src="qualcomm.png" alth="IIIT" />
                    <img id="felicity" src="felicityblack.png" alth="IIIT" />
                </div>
            </div>

            <div className="row" style={{"overflow": "hidden"}}>
                <div className="col-md-6 left-panel">
                    <div className="vertical-net">
                        {[...Array(336)].map((e, i) =>
                            <div className="silver-ball"></div>
                        )}
                    </div>

                    <div className="font-weight-bold left-header ml-5 mr-3 text-right text-warning"> CP </div>
                    <div className="font-weight-bold left-header-desc ml-5 mr-3 text-right text-warning"> WORKSHOP </div>

                    <div className="white-text-blob">
                        <p className="text-date">Date: 21st Feb @ 10 PM </p>
                        <p className="text-bullets">
                            <ul>
                                <li>Sample Bullet</li>
                                <li>Sample Bullet</li>
                                <li>Sample Bullet</li>
                            </ul>
                        </p>
                        <p className="text-price"><strong> PRICE: </strong> <strike>₹ 250.00 </strike> ₹ 200.00 </p>
                        <div className="text-buttons">
                            <button className="btn pink-buttons rounded-pill ml-3 mt-1"><strong>REGISTER NOW</strong></button>
                            <button className="btn pink-buttons rounded-pill ml-3 mt-1"><strong>MORE DETAILS</strong></button>
                        </div>
                        <div className="pink-lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        <div className="bg-rectangle">
                        </div>
                    </div>

                    <div className="image-absolute">
                        <div id="left-circle"></div>
                    </div>


                </div>
                <div className="col-md-6 right-panel">
                    
                    <div className="curved-lines">
                        <img src = "vector1.svg" id="curve3"  alt="My Happy SVG"/>
                        <img src = "vector2.svg" id="curve2" alt="My Happy SVG"/>
                        <img src = "vector3.svg" id="curve1" alt="My Happy SVG"/>
                    </div>

                    <div className="font-weight-bold right-header ml-5 mr-3 text-right text-white"> ML </div>
                    <div className="font-weight-bold right-header-desc ml-5 mr-3 text-right text-white"> WORKSHOP </div>
                    <div className="horizontal-net">
                        {[...Array(135)].map((e, i) =>
                            <div className="white-ball"></div>
                        )}
                    </div>

                    <div className="dark-text-blob">
                        <p className="text-date text-white">Date: 21st Feb @ 10 PM </p>
                        <p className="text-bullets text-white">
                            <ul>
                                <li>Sample Bullet</li>
                                <li>Sample Bullet</li>
                                <li>Sample Bullet</li>
                            </ul>
                        </p>
                        <p className="text-price text-white"><strong> PRICE: </strong><strike>₹ 250.00 </strike>₹ 200.00 </p>
                        <div className="text-buttons">
                            <button className="btn btn-warning rounded-pill ml-3 mt-1"><strong>REGISTER NOW</strong></button>
                            <button className="btn btn-warning rounded-pill ml-3 mt-1"><strong>MORE DETAILS</strong></button>
                        </div>
                    </div>

                    <div className="dark-text-blob-sidekick">
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="d-inline-block font-weight-bold infopage-title mx-5 event-heading text-white text-center cta-text"> 
                    BUY 2 GET 1 FREE 
                </div>

                <button className="d-inline-block cta-button btn btn-success"> REGISTER NOW </button>
            </div>

            <div className="container">
                <div className="text-center mt-2">
                    <div className="text-white font-weight-bold d-flex justify-content-center days">
                    </div>
                    <div className="text-white my-3 main-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Workshop;
