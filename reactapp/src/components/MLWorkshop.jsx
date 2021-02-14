import { Link } from "react-router-dom";
import "./Workshop.css";

const MLWorkshop = () => {

    document.body.style.backgroundColor = "#0F2028";

    return (
        <div>
            <div className="absolute-navbar">
                <Link to="/">
                    <img id="iiit" src="../iiit.png" alth="IIIT" />
                </Link> 
                <div className="text-center">
                    <img id="qualcomm" src="../qualcomm.png" alth="IIIT" />
                    <img id="felicity" src="../felicityblack.png" alth="IIIT" />
                </div>
            </div>

            <div className="row" style={{ "overflow": "hidden" }}>
                <div className="col-md-6 left-panel">
                    <div className="vertical-net">
                        {[...Array(336)].map((_, i) =>
                            <div className="silver-ball" key={i}></div>
                        )}
                    </div>

                    <div className="font-weight-bold left-header ml-5 mr-3 text-right text-warning"> CP </div>
                    <div className="font-weight-bold left-header-desc ml-5 mr-3 text-right text-warning"> WORKSHOP </div>

                    <div className="white-text-blob">
                        <p className="text-date">Date: 21st Feb @ 10 PM </p>
                        <p className="text-bullets">
                        Want to become an Expert on Codeforces?
                        Join us to learn concepts of CP and get that 1600+ rating.
                        No prerequisites required!
                        </p>
                        <p className="text-price"><strong> PRICE: </strong> <strike>₹ 250.00 </strike> ₹ 200.00 </p>
                        <div className="text-buttons">
                            <button className="btn pink-buttons rounded-pill ml-3 mt-1">REGISTER NOW</button>
                            <button className="btn pink-buttons rounded-pill ml-3 mt-1"><Link to="/workshop/"><strong>LESS DETAILS</strong></Link></button>
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
                        <img src="vector1.svg" id="curve3" alt="My Happy SVG" />
                        <img src="vector2.svg" id="curve2" alt="My Happy SVG" />
                        <img src="vector3.svg" id="curve1" alt="My Happy SVG" />
                    </div>

                    <div className="font-weight-bold details-header ml-5 mr-3 text-left text-white"> Machine</div>
                    <div className="font-weight-bold details-header-desc ml-5 mr-3 text-left text-white"> Learning</div>
                    <div className="horizontal-net">
                        {[...Array(135)].map((_, i) =>
                            <div className="white-ball" key={i}></div>
                        )}
                    </div>

                    <div className="dark-text-blob-full">
                        <p className="text-date text-white">Date: 21st Feb @ 10 PM </p>
                        <p className="text-bullets text-white">
                            <ul>
                                <li>Want to win a ML contest? Felicity IIITH brings you an interactive beginner workshop to cover important concepts of Machine Learning.</li>
                                <li>This fun and interactive workshop is designed for beginners with basic knowledge of Python as the only prerequisite.</li>
                                <li>The first part of the workshop will cover Neural Networks, CNNs, Code Walkthrough of Vision and NLP Models and various other cool techniques to get better results. The second part will make you familiar with GANs.</li>
                                <li>After the workshop, you may stick around for an additional QnA session where you can get your general doubts regarding ML cleared.</li>
                                <li>So, join us on 26th and 27th Feb, as we show you the tools necessary to become an expert in the field of Machine Learning!</li>
                            </ul>
                        </p>                        
                        <p className="text-price-details text-white"><strong> PRICE: </strong><strike>₹ 250.00 </strike>₹ 200.00 </p>
                        <div className="text-buttons-details text-right">
                            <button className="btn btn-warning rounded-pill mr-3 mt-1">REGISTER NOW</button>
                            <button className="btn btn-warning rounded-pill mr-3 mt-1"><Link to="/workshop/"><strong>LESS DETAILS</strong></Link></button>
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
                    Buy urgently, dont wait for the offer to expire !!
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MLWorkshop;
