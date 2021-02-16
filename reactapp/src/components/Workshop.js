import { useState } from "react";
// import { Link } from "react-router-dom";

import "./Workshop.css";
import WorkshopNavbar from "./WorkshopNavbar";

const Workshop = () => {

    const [mlExpand, setMlExpand] = useState(false);
    const [cpExpand, setCpExpand] = useState(false);

    const toggleML = (truthValue) => {
        console.log(truthValue);
        setMlExpand(truthValue);
    };

    const toggleCP = (truthValue) => {
        setCpExpand(truthValue);
    };

    document.body.style.backgroundColor = "#0F2028";

    return (
        <div>
            <WorkshopNavbar/>
            {/* <div className="absolute-navbar">
                <Link to="/">
                    <img id="iiit" src="../iiit.png" alt="IIIT" />
                </Link> 
                <div className="text-center">
                    <img id="qualcomm" src="../qualcomm.png" alth="IIIT" />
                    <Link to="/">
                        <img id="felicity" className="wp-felicity-logo" src="../felicityblack_cropped.png" alth="IIIT" />
                    </Link>
                </div>
                <div>
                    AA
                </div>
            </div> */}
            {/* <Navbar /> */}


            <div className="row" style={{ "overflow": "hidden" }}>
                {cpExpand ? 
                    <div className="col-md-6 left-panel">
                        <div className="image-absolute">
                            <div id="left-circle-small"></div>
                        </div>
                        <div className="font-weight-bold details-header ml-5 mr-3 text-left text-warning" style={{ fontSize: "2rem" }}> Competitive</div>
                        <div className="font-weight-bold details-header-desc ml-5 mr-3 text-left text-warning" style={{ fontSize: "4rem" }}> Programming</div>
                        <div className="white-text-blob-full" id="cpBox">
                            <p className="text-date">Date: 28<sup>th</sup> Feb @ 1 PM  </p>
                            <p className="text-bullets">
                                <ul>
                                    <li>Have you ever dreamt of becoming a Codeforces Expert? Felicity IIITH brings you an interactive beginner workshop to cover important concepts of competitive coding for helping you achieve your dreams!</li>
                                    <li>This fun and interactive workshop is designed for beginners with basic knowledge of C++ as the only prerequisite.</li>
                                    <li> A  wide range of important concepts will be covered, starting off with basic C++ programs and time complexity analysis followed by BIT manipulation, Binary Searching, and Dynamic Programming.</li>
                                    <li>The workshop will finally conclude with a discussion on essential concepts of Basic Graphs, Binary Tree, and BST.</li>
                                    <li>After the workshop, you may stick around for an additional half an hour of QnA session where you can get your general doubts regarding CP cleared.</li>
                                    <li>So, join us on 28th Feb, as we show you the tools necessary to become an expert on Codeforces!</li>
                                    <li style={{ fontWeight: "bold" }}>Also get a certificate for attending the workshop from IIIT Hyderabads side.</li>
                                </ul>
                            </p>
                            <p className="text-price-details text-right"><strong> PRICE: </strong> <strike>₹ 250.00 </strike> ₹ 200.00 </p>
                            <p className="text-buttons text-right">
                                <button className="btn pink-buttons rounded-pill mr-3 my-1" onClick={() => window.open("https://www.meraevents.com/event/iiit-hyderabad-cp-ml-workshops?ucode=organizer")}><strong>REGISTER NOW</strong></button>
                                <button className="btn pink-buttons rounded-pill mr-3 my-1 cpButtons" onClick={() => toggleCP(false)}><strong>LESS DETAILS</strong></button>
                            </p>
                        </div>


                    </div> :

                    <div className="col-md-6 left-panel">
                        <div className="vertical-net">
                            {[...Array(336)].map((_, i) =>
                                <div className="silver-ball" key={i}></div>
                            )}
                        </div>

                        <div className="font-weight-bold left-header ml-5 mr-3 text-right text-warning"> CP </div>
                        <div className="font-weight-bold left-header-desc ml-5 mr-3 text-right text-warning"> WORKSHOP </div>

                        <div className="white-text-blob">
                            <p className="text-date">Date: 28<sup>th</sup> Feb @ 1 PM  </p>
                            <p className="text-bullets">
                                <ul>
                                    <li>Want to become an Expert on Codeforces?</li>
                                    <li>Join us to learn concepts of CP and get that 1600+ rating.</li>
                                    <li>No prerequisites required!</li>
                                    <li style={{ fontWeight: "bold" }}>Also get a certificate for attending the workshop from IIIT Hyderabads side.</li>
                                </ul>
                            </p>
                            <p className="text-price"><strong> PRICE: </strong> <strike>₹ 250.00 </strike> ₹ 200.00 </p>
                            <p className="text-buttons mb-5 pb-3">
                                <button className="btn pink-buttons rounded-pill ml-3 mt-1" onClick={() => window.open("https://www.meraevents.com/event/iiit-hyderabad-cp-ml-workshops?ucode=organizer")}><strong>REGISTER NOW</strong></button>
                                <button className="btn pink-buttons rounded-pill ml-3 mt-1" onClick={() => toggleCP(true)}><strong>MORE DETAILS</strong></button>
                            </p>
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
                }
                {mlExpand ? 
                    <div className="col-md-6 right-panel">
                        <div className="curved-lines">
                            <img src="vector1.svg" id="curve3" alt="My Happy SVG" />
                            <img src="vector2.svg" id="curve2" alt="My Happy SVG" />
                            <img src="vector3.svg" id="curve1" alt="My Happy SVG" />
                        </div>

                        <div className="font-weight-bold details-header ml-5 mx-3 text-left text-white text-right"> Machine</div>
                        <div className="font-weight-bold details-header-desc ml-5 mx-3 text-left text-white text-right"> Learning</div>
                        <div className="horizontal-net">
                            {[...Array(135)].map((_, i) =>
                                <div className="white-ball" key={i}></div>
                            )}
                        </div>

                        <div className="dark-text-blob-full">
                            <p className="text-date text-white">Date: 26<sup>th</sup>-27<sup>th</sup> Feb @ 12 PM </p>
                            <p className="text-bullets text-white">
                                <ul>
                                    <li>Want to win a ML contest? Felicity IIITH brings you an interactive beginner workshop to cover important concepts of Machine Learning.</li>
                                    <li>This fun and interactive workshop is designed for beginners with basic knowledge of Python as the only prerequisite.</li>
                                    <li>The first part of the workshop will cover Neural Networks, CNNs, Code Walkthrough of Vision and NLP Models and various other cool techniques to get better results. The second part will make you familiar with GANs.</li>
                                    <li>After the workshop, you may stick around for an additional QnA session where you can get your general doubts regarding ML cleared.</li>
                                    <li>So, join us on 26th and 27th Feb, as we show you the tools necessary to become an expert in the field of Machine Learning!</li>
                                    <li style={{ fontWeight: "bold" }}>Also get a certificate for attending the workshop from IIIT Hyderabads side.</li>
                                </ul>
                            </p>                        
                            <p className="text-price-details text-white"><strong> PRICE: </strong><strike>₹ 250.00 </strike>₹ 200.00 </p>
                            <p className="text-buttons mb-5 pb-3 text-right">
                                <button className="btn btn-warning rounded-pill mr-3 mt-1"  onClick={() => window.open("https://www.meraevents.com/event/iiit-hyderabad-cp-ml-workshops?ucode=organizer")}><strong>REGISTER NOW</strong></button>
                                <button className="btn btn-warning rounded-pill mr-3 mt-1" onClick={() => toggleML(false)}><strong>LESS DETAILS</strong></button>
                            </p>
                        </div>

                        <div className="dark-text-blob-sidekick">
                        </div>
                    </div> :
                    <div className="col-md-6 right-panel">

                        <div className="curved-lines">
                            <img src="vector1.svg" id="curve3" alt="My Happy SVG" />
                            <img src="vector2.svg" id="curve2" alt="My Happy SVG" />
                            <img src="vector3.svg" id="curve1" alt="My Happy SVG" />
                        </div>

                        <div className="font-weight-bold right-header ml-5 mr-3 text-right text-white"> ML </div>
                        <div className="font-weight-bold right-header-desc ml-5 mr-3 text-right text-white"> WORKSHOP </div>
                        <div className="horizontal-net">
                            {[...Array(135)].map((_, i) =>
                                <div className="white-ball" key={i}></div>
                            )}
                        </div>

                        <div className="dark-text-blob">
                            <p className="text-date text-white">Date: 26<sup>th</sup>-27<sup>th</sup> Feb @ 1 PM </p>
                            <p className="text-bullets text-white">
                                <ul>
                                    <li>Ever heard of Kaggle? Curious about GPT-3?</li>
                                    <li>Thought of building your own GAN application?</li>
                                    <li>Join us to learn concepts of ML, in an interactive workshop.</li>
                                    <li style={{ fontWeight: "bold" }}>Also get a certificate for attending the workshop from IIIT Hyderabads side.</li>
                                </ul>
                            </p>                        
                            <p className="text-price text-white"><strong> PRICE: </strong><strike>₹ 250.00 </strike>₹ 200.00 </p>
                            <p className="text-buttons mb-5 pb-3">
                                <button className="btn btn-warning rounded-pill ml-3 mt-1" onClick={() => window.open("https://www.meraevents.com/event/iiit-hyderabad-cp-ml-workshops?ucode=organizer")}><strong>REGISTER NOW</strong></button>
                                <button className="btn btn-warning rounded-pill ml-3 mt-1" onClick={() => toggleML(true)}><strong>MORE DETAILS</strong></button>
                            </p>
                        </div>

                        <div className="dark-text-blob-sidekick">
                        </div>
                    </div>
                }
            </div>

            <div className="text-center">
                <div className="d-inline-block font-weight-bold infopage-title mx-5 event-heading text-white text-center cta-text text-combo">
                    GET BOTH AT <strike className="text-combo-prev-price">₹ 500 </strike>₹ 300
                    <div className="combo-code">*use you campus ambassador code and get <strong>EXTRA</strong> ₹50 OFF</div>
                </div>

                <button className="d-inline-block cta-button btn btn-success"  onClick={() => window.open("https://www.meraevents.com/event/iiit-hyderabad-cp-ml-workshops?ucode=organizer")}> REGISTER NOW </button>
            </div>

            <div className="container">
                <div className="text-center mt-2">
                    <div className="text-white font-weight-bold d-flex justify-content-center days">
                    </div>
                    <div className="text-white my-3 main-description">
                        Buy urgently, dont wait for the offer to expire !!
                        <br/>
                        <div className="lead"> Contact: &#9742; (+91) - 81788 64086</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Workshop;
