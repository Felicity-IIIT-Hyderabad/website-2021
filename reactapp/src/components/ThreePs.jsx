import { useRef } from "react";
import { Container } from "reactstrap";

import VisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from "react-animate-on-scroll";

const PItem = ({ text }) => {
    return (
        <ScrollAnimation animateIn="fadeInLeft">
            <div className="display-1 font-weight-bold">{text}</div>
        </ScrollAnimation>
    );
};

const ThreePs = ({ id }) => {
    var bgVideo = useRef(null);

    const playVideo = (isVisible) => {
        if (isVisible) bgVideo.current.play();
    };

    return (
        <Container fluid id={id} className="full-page text-light vignette">
            <VisibilitySensor partialVisibility onChange={playVideo}>
                <video ref={bgVideo} playsInline muted className="bg-media">
                    <source src="/videos/threep.mp4" type="video/mp4" />
                </video>
            </VisibilitySensor>
            <Container className="d-flex flex-column justify-content-center h-100">
                <PItem text="100+ Participants" />
                <PItem text="100+ Partners" />
                <PItem text="100+ Prizes" />
            </Container>
        </Container>
    );
};

export default ThreePs;
