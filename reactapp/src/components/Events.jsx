import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const Events = ({ id }) => {
    return (
        <div id={id} className="full-page d-flex flex-column justify-content-center text-light">
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Events</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <Row>
                        <Col md={6}>
                            <div className="infopage-subtitle"> Technical </div>
                            <div className="mb-5 lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                                minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                                harum alias officiis assumenda officia quibusdam deleniti eos
                                cupiditate dolore doloribus! <br /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
                                natus eveniet ratione temporibus aperiam harum alias officiis
                                assumenda officia quibusdam deleniti eos cupiditate dolore
                                doloribus!
                            </div>
                        </Col>
                        <Col>
                            <div className="infopage-subtitle"> Cultural </div>
                            <div className="mb-5 lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
                                minus molestiae vel beatae natus eveniet ratione temporibus aperiam
                                harum alias officiis assumenda officia quibusdam deleniti eos
                                cupiditate dolore doloribus! <br /> Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
                                natus eveniet ratione temporibus aperiam harum alias officiis
                                assumenda officia quibusdam deleniti eos cupiditate dolore
                                doloribus!
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation>
            </Container>
        </div>
    );
};

export default Events;
