import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { SocialIcon } from "react-social-icons";
import GoogleMapReact from "google-map-react";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab, faTwitterSquare, faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebookF, faTwitterSquare, faInstagram, faYoutube);

var defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33,
    },
    zoom: 11,
};

const Sponsors = ({ id }) => {
    return (
		<div>
		            <div className="image-absolute">
                <div id="tech-circle4"></div>
                <div id="tech-circle3"></div>
                <div id="tech-circle2"></div>
                <div id="tech-circle1"></div>
            </div>

        <div id={id} className="d-flex flex-column text-light contact-page dark-blue">
		<br />
		<br />
		<br />

            <Container className="px-5 px-md-0">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5" style={{ textAlignVertical: "right", textAlign: "right" }}>Sponsors</h1>
		            <br />
		            <br />
		            <br />
		            <br />
		            <br />
                    <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Title Sponsor</h1>
		            <br />
		            <br />
		            <br />
		            <br />
		            <br />
		             <img src="/qualcomm.png" alt="image" className="center-image justify-content-center" style={{ alignSelf: 'right', display: 'flex'}}/>
                    <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Media Sponsor</h1>                    
		            <div className="center-image">
		             <img src="/sbi.png" alt="image" className="center-image"/>
		            </div>

                    <h1 className="font-weight-bold center" style={{ textAlignVertical: "center", textAlign: "center" }}>Past Sponsors</h1>                    
		<Row className="d-flex align-items-center">
                        <Col md className="d-flex flex-column align-items-start text-md-left">
		              <div className="center-image">
		             <img src="/logos/airtel.png" alt="image" className="center-image"/>
		            </div>

                        </Col>
                        <div className="divider d-none d-md-block" />
                        <Col
                            md
                            className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0"
                        >		            <div className="center-image">
		             <img src="/logos/ajio.png" alt="image" className="center-image"/>
		            </div>

                          </Col>
                     </Row>
		<Row className="d-flex align-items-center">
                        <Col md className="d-flex flex-column align-items-start text-md-left">
		              <div className="center-image">
		             <img src="/logos/ebay.png" alt="image" className="center-image"/>
		            </div>

                        </Col>
                        <div className="divider d-none d-md-block" />
                        <Col
                            md
                            className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0"
                        >		            <div className="center-image">
		             <img src="/logos/lic.png" alt="image" className="center-image"/>
		            </div>

                          </Col>
                     </Row>

		<Row className="d-flex align-items-center">
                        <Col md className="d-flex flex-column align-items-start text-md-left">
		              <div className="center-image">
		             <img src="/logos/microsoft.png" alt="image" className="center-image"/>
		            </div>

                        </Col>
                        <div className="divider d-none d-md-block" />
                        <Col
                            md
                            className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0"
                        >		            <div className="center-image">
		             <img src="/logos/redfm.png" alt="image" className="center-image"/>
		            </div>

                          </Col>
                     </Row>

                </ScrollAnimation>
                {/* <ScrollAnimation animateIn="fadeIn">
                    <Row>
                        <Col md={6}>
                            <div className="mb-5 lead">
                    IIIT Hyderabad

                    Professor CR Rao Rd, 

                    Gachibowli, Hyderabad, 

                    Telangana 500032, India
                    </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-5 lead">
                        &#169; Felicity 2021, IIIT Hyderabad
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation> */}
                {/* <Col> */}
                {/*     <ScrollAnimation animateIn="fadeIn"> */}
                {/*         <MapEmbed /> */}
                {/*     </ScrollAnimation> */}
                {/* </Col> */}
                <Footer />
            </Container>
        </div>
		</div>
    );
};

export default Sponsors;
