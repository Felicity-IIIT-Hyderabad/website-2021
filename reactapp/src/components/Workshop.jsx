import { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "./Workshop.css"

const Workshop = () => {

    document.body.style.backgroundColor = "#0F2028";

    return (
        <div>

            <div className="row" style={{"overflow": "hidden"}}>
                <div className="col-md-6 left-panel">
                    <div className="font-weight-bold left-header my-5 ml-3 mr-5 text-left text-warning"> Competitive Coding Workshop </div>
                    <div className="vertical-net">
                        {[...Array(128)].map((e, i) =>
                            <div className="silver-ball"></div>
                        )}
                    </div>

                    <div className="white-text-blob">
                        <p>The diversity of cultures of the student body at IIITH is an invaluable asset to the institute, giving rise a unique 'IIITH spirit'. </p>
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

                    <div className="font-weight-bold right-header mt-2 ml-5 mr-3 text-right text-white"> ML </div>
                    <div className="font-weight-bold right-header-desc ml-5 mr-3 text-right text-white"> WORKSHOP </div>
                    <div className="horizontal-net">
                        {[...Array(135)].map((e, i) =>
                            <div className="white-ball"></div>
                        )}
                    </div>

                    <div className="dark-text-blob">
                        <p>The diversity of cultures of the student body at IIITH is an invaluable asset to the institute, giving rise a unique 'IIITH spirit'. </p>
                    </div>

                    <div className="dark-text-blob-sidekick">
                    </div>
                </div>
            </div>


            <div className="font-weight-bold infopage-title my-5 mx-5 event-heading text-white text-center"> BUY 2 GET 1 FREE </div>

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
