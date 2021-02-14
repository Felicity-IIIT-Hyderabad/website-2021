import { Link } from "react-router-dom";
import "./Workshop.css";

const CPWorkshop = () => {
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
                    <div className="font-weight-bold details-header ml-5 mr-3 text-left text-warning"> Competitive</div>
                    <div className="font-weight-bold details-header-desc ml-5 mr-3 text-left text-warning"> Programming</div>
                    <div className="white-text-blob-full mt-5 mx-5">
                        <p className="text-date">Date: 21st Feb @ 10 PM </p>
                        <p className="text-bullets">
                            <ul>
                            </ul>
                        </p>
                        <p className="text-price-details text-right"><strong> PRICE: </strong> <strike>₹ 250.00 </strike> ₹ 200.00 </p>
                        <div className="text-buttons-details text-right mt-5">
                            <button className="btn pink-buttons rounded-pill mr-3 my-1">REGISTER NOW</button>
                            <button className="btn pink-buttons rounded-pill mr-3 my-1"><Link to="/workshop/"><strong>LESS DETAILS</strong></Link></button>
                        </div>
                    </div>

                    <div className="image-absolute">
                        <div id="left-circle-small"></div>
                    </div>


                </div>
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
                        <p className="text-date text-white">Date: 21st Feb @ 10 PM </p>
                        <p className="text-bullets text-white">                            
                        Ever heard of Kaggle? Curious about GPT-3?
                        Thought of building your own GAN application?
                        Join us to learn concepts of ML, in an interactive workshop.
                        </p>                        
                        <p className="text-price text-white"><strong> PRICE: </strong><strike>₹ 250.00 </strike>₹ 200.00 </p>
                        <div className="text-buttons">
                            <button className="btn btn-warning rounded-pill ml-3 mt-1">REGISTER NOW</button>
                            <button className="btn btn-warning rounded-pill ml-3 mt-1"><Link to="/workshop/"><strong>LESS DETAILS</strong></Link></button>
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

export default CPWorkshop;
