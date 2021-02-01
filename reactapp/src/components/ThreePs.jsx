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
            <img src="/himalaya-new-static.jpg" alt="" className="bg-media" />
            <Container className="d-flex flex-column justify-content-center h-100">
                <PItem text="Participants: 20,000+ " />
                <PItem text="Partners: 12+ " />
                <PItem text="Prizes worth: &#8377; 400K   " />
            </Container>
        </div>
    );
};

export default ThreePs;
