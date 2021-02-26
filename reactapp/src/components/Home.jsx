import React from "react";
import { connect } from "react-redux";
import RetroHitCounter from 'react-retro-hit-counter';
import axios from "axios";
import Swal from "sweetalert2";

import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import CampusReloaded from "./CampusReloaded";
import ThreePs from "./ThreePs";
import { getUser } from "../actions/login";

import { eventsApi, eventsRegisteredApi, eventsBaseApi } from "../api/";
import { fireInfo, formatDate3, compareFunc } from "./helpfunctions";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
    }

    componentDidMount = () => { 
        getUser();
    }

    componentDidUpdate = () => {
        if(this.state.key){
            this.setState({
                key:0
            });
        }
    }

    render() {
        return (
            <>
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

const mapStateToProps = state => (
    {
        userInfo: state,
    });

export default connect(mapStateToProps)(Home);

