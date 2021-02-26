import React from "react";
import { connect } from "react-redux";
import RetroHitCounter from 'react-retro-hit-counter';
import axios from "axios";

import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import CampusReloaded from "./CampusReloaded";
import ThreePs from "./ThreePs";
import { getUser } from "../actions/login";

import { eventsApi, eventsRegisteredApi, eventsBaseApi } from "../api/";
import { fireInfo, formatDate3 } from "./helpfunctions";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
    }

    getEvents(){
        var tempCultEvents = { "Day1":[],"Day2":[],"Day3":[] };        
        fireInfo("hi");
        // axios.get(eventsApi).then(async (response)=>{
        //     var today = new Date();
        //     var eventsData = this.sortDateWise(response.data).filter((obj)=> {
        //         var date = new Date(obj.start_date);
        //         return date > today;
        //     });
        //     var string = "";
        //     eventsData.map((obj)=>{
        //         string += "\n";
        //         string += obj.name;
        //         string += ":";
        //         string += formatDate3(obj.start_date);
        //         string += "\t to \t";
        //         string += formatDate3(obj.end_date);
        //     });
        //     fireInfo(string);
        // });
    }    

    componentDidMount = () => {
        this.getEvents();
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

