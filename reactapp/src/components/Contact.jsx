import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import MapEmbed from "./MapEmbed";

const Contact = ({ id }) => {
    return (
        <div id={id} className="d-flex flex-column justify-content-center text-light">
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Contact </h1>
                </ScrollAnimation>
                <Row>
                    <Col md={6}>
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="mb-5 lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                                minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                                harum alias officiis assumenda officia quibusdam deleniti eos
                                cupiditate dolore doloribus!
                            </div>
                            <div className="mb-5 lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                                minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                                harum alias officiis assumenda officia quibusdam deleniti eos
                                cupiditate dolore doloribus!
                            </div>
                        </ScrollAnimation>
                    </Col>
                    {/* <Col> */}
                    {/*     <ScrollAnimation animateIn="fadeIn"> */}
                    {/*         <MapEmbed /> */}
                    {/*     </ScrollAnimation> */}
                    {/* </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
