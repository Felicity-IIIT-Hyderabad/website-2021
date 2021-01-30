import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = ({ id }) => {
    return (
        <div id={id} className="d-flex flex-column justify-content-center text-light">
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Contact </h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
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
                </ScrollAnimation>
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
