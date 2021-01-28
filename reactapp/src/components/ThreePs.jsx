import { Container } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const PItem = ({ text }) => {
    return (
        <ScrollAnimation animateIn="fadeInLeft">
            <div className="display-1 font-weight-bold">{text}</div>
        </ScrollAnimation>
    );
};

const ThreePs = ({ id }) => {
    return (
        <Container fluid id={id} className="full-page text-light vignette">
            <video autoPlay muted className="bg-media">
                <source src="/videos/threep.mp4" type="video/mp4" />
            </video>
            <Container className="d-flex flex-column justify-content-center h-100">
                <PItem text="Participants" />
                <PItem text="Partners" />
                <PItem text="Prizes" />
            </Container>
        </Container>
    );
};

export default ThreePs;
