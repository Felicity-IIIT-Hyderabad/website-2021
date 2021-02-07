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
            <img width="600px" height="400px" src="/crowd22.jpeg" alt="" className="bg-media" />
            <Container className="d-flex flex-column justify-content-center">
                <PItem text="Participants: 20,000+"/>
                <PItem text="Partners: 30+ " />
                <PItem text="Prizes worth: &#8377; 400K   " />
            </Container>
        </div>
    );
};

export default ThreePs;
