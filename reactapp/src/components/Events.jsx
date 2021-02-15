import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const Events = ({ id }) => {

    document.body.style.backgroundColor = "#000";

    return (
        <div id={id} className="full-page d-flex flex-column justify-content-center text-light">
            <Container className="px-5 px-md-0">
                <ScrollAnimation animateIn="fadeIn">
                    <h1 className="font-weight-bold infopage-title mb-5"> Events</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <Row>
                        <Col md={6}>
                            <div className="infopage-subtitle"> <Link to="/events-technical" style={{ "textDecoration": "none", "color": "white" }}>Technical</Link></div>
                            <div className="mb-5 lead">
                Following the tradition of electrifying events since the first
                Felicity fest, this year too, we have an array of exhilarating
                events lined up ranging from the &apos;Online Treasure Hunt&apos; to
                &apos;CodeCraft&apos; competition and many more. All in all, guaranteeing an
                opportunity for the participants to fully enjoy and flaunt their
                technical skills!
                            </div>
                        </Col>
                        <Col>
                            <div className="infopage-subtitle"> <Link to="/events-cultural" style={{ "textDecoration": "none", "color": "white" }}>Cultural</Link> </div>
                            <div className="mb-5 lead">
                The diversity of cultures of the student body at IIITH is an
                invaluable asset to the institute, giving rise a unique &apos;IIITH
                spirit&apos;. Celebrating this, we have multiple events such as
                &apos;Inaugurals&apos;- music event, &apos;Campfire Night&apos; and many more which will
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
