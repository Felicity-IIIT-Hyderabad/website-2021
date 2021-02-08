import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Link } from "react-scroll";

const Intro = ({ id, scrollLocked }) => {
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLogoVisible(true), 4000);
    }, []);

    useEffect(() => {
        scrollLocked ? disablePageScroll() : enablePageScroll();
    }, [scrollLocked]);

    return (
        <div fluid id={id} className="full-page text-light vignette">
            <video autoPlay muted className="bg-media animate-darken">
                <source src="/videos/intro.MOV" type="video/mp4" />
            </video>
            <div className="intro-logo-container">
                {logoVisible && <img src="/feli21white.png" alt="" className="intro-logo" />}
            </div>
            <Link to="about" spy={true} smooth={true} duration={500}>
                <img
                    src="/caret.svg"
                    alt=""
                    className={`intro-caret ${
                        scrollLocked ? "navbar-logo-hidden" : "navbar-logo-visible"
                    }`}
                />
            </Link>
        </div>
    );
};

export default Intro;
