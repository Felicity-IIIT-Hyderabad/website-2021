import React from 'react';
import felicity_logo from '../images/images/felicity-2022-logo.png';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./StandIn.css"


const StandIn = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const myRef = useRef(null);

    useEffect(() => {
        document.title = "Felicity '22";
    }, []);

    return (
        <div className="app-wrapper" style={
            {
                backgroundImage: `url('/felicity-banner.png')`,
                backgroundSize: "cover",
                textAlign: "center",
            }
        }>
            <div className="wrapper">
                <header>
                    <a href={window.location.href === 'http://localhost:3000/' ? 'http://localhost:3000/2021' : 'https://felicity.iiit.ac.in/2021'} className="link felicity-website-link">FELICITY 2021 &#8594;</a>
                    <img src={felicity_logo} className="felicity-2022-logo" alt="logo" />
                    <p className="coming-soon-message">
                        18th-20th March
                    </p>
                    <p className='about-us-message'>
                    Felicity is IIIT Hyderabad's annual cultural and tech fest held every year at the beginning of the spring semester. Felicity encompasses and embraces the diverse plethora of interests of IIIT Hyderabad, with everyone playing a role.
                    </p>
                </header>
                <div className="footer-container">
                    <div className="contact-chevron" onClick={() => scrollToRef(myRef)}>
                        &#8964;
                    </div>
                    <footer className="contact-section" ref={myRef}>
                        <p className="contact-message">
                            <b>CONTACT US</b>
                        </p>
                        <div className="contact-details">
                            <p><b>Pahulpreet Singh</b></p>
                            <p>+91 86830 51351</p>
                        </div>
                        <div className="contact-details">
                            <p><b>Konda Jayant Reddy</b></p>
                            <p>+91 83283 94347</p>
                        </div>
                        <div className="contact-details">
                            <p><b>Keshav Bajaj</b></p>
                            <p>+91 85297 74123</p>
                        </div>
                        <div className="contact-details">
                            <p><b>Email Us</b></p>
                            <a href="mailto: contact@felicity.iiit.ac.in" className="link">
                                contact@felicity.iiit.ac.in
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default StandIn