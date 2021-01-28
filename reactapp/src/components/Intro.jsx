import { useState, useEffect } from "react";
import { Container } from "reactstrap";

const Intro = ({ id }) => {
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLogoVisible(true), 4000);
    }, []);

    return (
        <Container fluid id={id} className="full-page text-light vignette">
            <video autoPlay muted className="bg-media animate-darken">
                <source src="/videos/intro.MOV" type="video/mp4" />
            </video>
            <div className="intro-logo-container">
                {logoVisible && <img src="/feli21white.png" alt="" className="intro-logo" />}
            </div>
        </Container>
    );
};

export default Intro;
