import { Container } from "reactstrap";

import ScrollAnimation from "react-animate-on-scroll";

const PItem = ({ text }) => {
    return (
        <ScrollAnimation animateIn="fadeInLeft">
            <div className="threep-text font-weight-bold my-n2">{text}</div>
        </ScrollAnimation>
    );
};

const ThreePs = ({ id }) => {
    return (
        <div fluid id={id} className="full-page text-light vignette">
            <img src="/threep-static.png" alt="" className="bg-media" />
            <Container className="d-flex flex-column justify-content-center h-100">
                <PItem text="100+ Participants" />
                <PItem text="100+ Partners" />
                <PItem text="100+ Prizes" />
            </Container>
        </div>
    );
};

export default ThreePs;
