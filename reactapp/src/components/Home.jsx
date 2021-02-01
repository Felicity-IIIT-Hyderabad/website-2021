import React, { Component } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import CampusReloaded from "./CampusReloaded";
import Footer from "./Footer";
import ThreePs from "./ThreePs";

class Home extends React.Component {
    render() {
        return (
            <>
                <About id="about" />
                <CampusReloaded />
                <Events id="events" />
                <ThreePs />
                <Contact id="contact" />
            </>
        );
    }
}

export default Home;
