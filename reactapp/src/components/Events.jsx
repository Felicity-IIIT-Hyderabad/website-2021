import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const Events = ({ id }) => {
    return (
        <div id={id} className="full-page d-flex flex-column justify-content-center text-light">
            <Container>
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold display-3 mb-5"> Events</h1>
                </ScrollAnimation>
                <Row>
                    <Col md={6}>
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="h1"> Technical </div>
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
                        </ScrollAnimation>
                    </Col>
                    <Col>
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="h1"> Cultural </div>
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
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Events;
