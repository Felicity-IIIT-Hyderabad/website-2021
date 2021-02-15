import React from "react";
import { connect } from "react-redux";
import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import CampusReloaded from "./CampusReloaded";
import ThreePs from "./ThreePs";
import Navbar from "./Navbar";

class Home extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        console.log("BHAYA");
        console.log(this.props);
    }

    render() {
        return (
            <>
                <Navbar />
                <Intro id="home" />
                <div id="main">
                    <About id="about" />
                    <CampusReloaded />
                    <Events id="events" />
                    <ThreePs />
                    <Contact id="contact" />
                </div>
            </>
        );
    }
}

export default connect()(Home);

