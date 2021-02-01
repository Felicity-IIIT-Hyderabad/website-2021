import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { SocialIcon } from 'react-social-icons';
import GoogleMapReact from 'google-map-react';

var defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

const Contact = ({ id }) => {
    return (
        <div id={id} className="d-flex flex-column justify-content-center text-light">
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Contact Us</h1>
                    <Row>
                        <Col md={4}>
                            <div className="mb-5 lead">
                                IIIT Hyderabad
                                        
                                Professor CR Rao Rd, 

                                <br/>
                                Gachibowli, Hyderabad, 

                                <br/>
                                Telangana 500032, India

                                <br/>
                                
                                &#9742; : (+91) - 85294 73299
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className="mb-5 lead">
                                Social Media
                        </div>
                            {/* <br/> */}
                            <SocialIcon url="https://www.youtube.com/c/FelicityIIITHyderabad"/>
                            <SocialIcon url="http://twitter.com/felicity_iiith" />
                            <SocialIcon url="https://www.instagram.com/felicity.iiith" />
                            <SocialIcon url="https://www.facebook.com/felicity.iiith/" />
                        </Col>
                        <div className="mb-5 lead">
                                Overall Coordinator: Shivaan Sehgal
                        </div>                                         
                    </Row>
                    <Row>
                    <Col md={4}>
                    </Col>
                        <Col md={6}>
                            <div className="mb-5 lead">
	    				&#169; Felicity 2021, IIIT Hyderabad
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
            </Container>
        </div>
    );
};

export default Contact;
