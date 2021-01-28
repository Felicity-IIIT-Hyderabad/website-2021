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
        <Container
            id={id}
            className="full-page d-flex flex-column justify-content-center text-light"
        >
            <PItem text="Participants" />
            <PItem text="Partners" />
            <PItem text="Prizes" />
        </Container>
    );
};

export default ThreePs;
