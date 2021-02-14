import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "./Footer";

/*
var defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33,
    },
    zoom: 11,
};
*/

const Contact = ({ id }) => {
    return (
        <div
            id={id}
            className="d-flex flex-column justify-content-center text-light contact-page h-50 h-md-100 pt-4"
        >
            <Container className="px-5 px-md-0">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Contact Us </h1>
                    <Row className="d-flex align-items-center">
                        <Col md className="d-flex flex-column align-items-start text-md-left">
                            <div className="mb-1 font-weight-bold">Address</div>
                            <div className="mb-3 lead">
                                {`
                                IIIT Hyderabad
                                Professor CR Rao Rd,
                                Gachibowli, Hyderabad,
                                Telangana 500032, India
                                `
                                    .split("\n")
                                    .map((l, idx) => (
                                        <div key={idx}>{l}</div>
                                    ))}
                            </div>
                        </Col>
                        <div className="divider d-none d-md-block" />
                        <Col
                            md
                            className="d-flex flex-column align-items-start align-items-md-center my-5 my-md-0"
                        >
                            <div className="mb-3 font-weight-bold">Social Media</div>
                            <div>
                                <a
                                    href="https://www.youtube.com/c/FelicityIIITHyderabad"
                                    className="mx-0 mr-3 mx-md-3"
                                >
                                    <img src="/youtube.svg" alt="YouTube" className="yt-icon" />
                                </a>
                                <a
                                    href="http://twitter.com/felicity_iiith"
                                    className="mx-0 mr-3 mx-md-3"
                                >
                                    <img src="/twitter.svg" alt="Twitter" className="tw-icon" />
                                </a>
                                <a href="https://www.instagram.com/felicity.iiith" className="mx-2">
                                    <img src="/instagram.svg" alt="Instagram" className="ig-icon" />
                                </a>
                                <a href="https://www.facebook.com/felicity.iiith/" className="mx-2">
                                    <img src="/facebook.svg" alt="Facebook" className="fb-icon" />
                                </a>
                            </div>
                        </Col>
                        <div className="divider d-none d-md-block" />
                        <Col
                            md
                            className="d-flex flex-column align-items-md-end text-left text-md-right"
                        >
                            <div className="mb-1 font-weight-bold">Overall Coordinator</div>
                            <div className="lead">Shivaan Sehgal</div>
                            <div className="lead">&#9742; (+91) - 85294 73299</div>
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
    );
};

export default Contact;
