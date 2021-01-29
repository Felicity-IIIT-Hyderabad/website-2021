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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                                minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                                harum alias officiis assumenda officia quibusdam deleniti eos
                                cupiditate dolore doloribus!
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-5 lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                                minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                                harum alias officiis assumenda officia quibusdam deleniti eos
                                cupiditate dolore doloribus!
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
