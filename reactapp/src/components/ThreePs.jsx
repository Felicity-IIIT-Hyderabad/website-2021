import { Container } from "reactstrap";

import ScrollAnimation from "react-animate-on-scroll";

const PItem = ({ text }) => {
    return (
        <ScrollAnimation animateIn="fadeInLeft">
            <div className="threep-text font-weight-bold my-n1 my-md-n2">{text}</div>
        </ScrollAnimation>
    );
};

const ThreePs = ({ id }) => {
    return (
        <div fluid id={id} className="full-page text-light vignette">
            <img width="600px" height="400px" src="/crowd22.jpeg" alt="" className="bg-media home-threeP" />
            <Container className="d-flex flex-column justify-content-center threep-container">
                <div className="home-threeP-text">
                <PItem text="Participants: 20,000+" className="home-threeP-text" />
                <PItem text="Partners: 30+ "  className="home-threeP-text"/>
                <PItem text="Prizes worth: &#8377; 400K   " className="home-threeP-text" />
                </div>
            </Container>
        </div>
    );
};

export default ThreePs;
