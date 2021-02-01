import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const Events = ({ id }) => {
    return (
        <div id={id} className="full-page d-flex flex-column justify-content-center text-light">
            <Container className="px-5 px-md-0">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Events</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <Row>
                        <Col md={6}>
                            <div className="infopage-subtitle"> Technical </div>
                            <div className="mb-5 lead">
                                Following the tradition of electrifying events since the first
                                Felicity fest, this year too, we have an array of exhilarating
                                events lined up ranging from the 'Online Treasure Hunt' to
                                'CodeCraft' competition and many more. All in all, guaranteeing an
                                opportunity for the participants to fully enjoy and flaunt their
                                technical skills!
                            </div>
                        </Col>
                        <Col>
                            <div className="infopage-subtitle"> Cultural </div>
                            <div className="mb-5 lead">
                                The diversity of cultures of the student body at IIITH is an
                                invaluable asset to the institute, giving rise a unique 'IIITH
                                spirit'. Celebrating this, we have multiple events such as
                                'Inaugurals'- music event, 'Campfire Night' and many more which will
                                ensure a bonanza of fun.
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation>
            </Container>
        </div>
    );
};

export default Events;
