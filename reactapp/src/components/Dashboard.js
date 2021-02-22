import React from "react";
import "./Dashboard.css";

import { Button } from "reactstrap";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { connect } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { loginUser, logoutUser } from "../actions/login";
import { getUser } from "../actions/login";

import { eventsApi, eventsRegisteredApi } from "../api/";
// import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

var key = 1;

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events: [],
        };
    }

    leftScroll = (num) => {
        var carousel = document.getElementById("event"+num);
        carousel.scrollBy(-400, 0);
    };

    rightScroll = (num) => {
        var carousel = document.getElementById("event"+num);
        carousel.scrollBy(400, 0);
    };

    compare(a,b){
        var date1 = new Date(a.start_date);
        var date2 = new Date(b.start_date);
        return date1 > date2;
    }

    sortDateWise(array){
        return array.sort(this.compare)
    }

    getEvents(){
        var tempCultEvents = { "Day1":[],"Day2":[],"Day3":[] };        
        axios.get(eventsRegisteredApi,{
            headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")).token : ""}
        }).then(async (response)=>{
            var cultEventsData = this.sortDateWise(response.data);

            this.setState({
                events: cultEventsData,
            });
        }).catch((error)=>
            console.log(error)
        );
    }

    componentDidMount = () => {
        if(key)
        {
            key = 0;   
            getUser();
        }
        this.getEvents();
    }

    todayDate = (array) => {
        var today = new Date();
        var todayEvents = array.filter((obj) => {
            var date = new Date(obj.start_date);
            return date == today
        })
        return todayEvents;
    }

    afterToday = (array) => {
        var today = new Date();
        var todayEvents = array.filter((obj) => {
            var date = new Date(obj.start_date);
            return date > today
        })
        return todayEvents;
    }

    render () {
        return (
            <>
                <div>
                    <div className="container-fluid">
                        <div className="header-carousel">
                            <AutoplaySlider
                                play={true}
                                cancelOnInteraction={false} // should stop playing on user interaction
                                interval={2000}>
                                <div className="header-carousel-item" id="item1">
                                    <div className="header-carousel-title text-left">
                                        Event One
                                    </div>
                                </div>
                                <div className="header-carousel-item" id="item2">2
                                    <div className="header-carousel-title text-left">
                                        Event Two
                                    </div>
                                </div>
                            </AutoplaySlider>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-3 left-display">
                            <h2 className="text-center my-3 text-white"><strong>View All Events</strong></h2>
                            <div className="event-days text-center mt-4">
                                <Button className="btn event-button mt-4 event-pink" onClick={() => window.open("/events-cultural")}> CULTURAL </Button><br/>
                                <Button className="btn event-button mt-4 event-green" onClick={() => window.open("/events-technical")}> TECHNICAL </Button><br/>
                            </div>
                        </div>
                        
                        <div className="col-md-9 right-display">
                            <div className="event-type-title mt-3 mx-3">Upcoming - Today</div>
                            <div className="carousel-holder">
                                <div className="mt-4 event-carousel" id="event1">
                                    <div className="empty-space mx-4 desktop-only"></div>
                                    {this.todayDate(this.state.events).map((event, idx) => (
                                            <div className="event-carousel-item mt-4 mx-2" key={idx} onClick={() => window.open("/events/" + event["code"])}  style={{backgroundImage: "url('/myEvents/" + event["code"] + ".png')"}}>
                                                <div>
                                                    {event["name"]}
                                                </div>
                                            </div>
                                    ))}
                                    <div className="empty-space mx-5 desktop-only">&nbsp;</div>
                                </div>
                                <div className="left-arrow desktop-only" onClick={() => this.leftScroll(1)}><FontAwesomeIcon icon={faChevronLeft} /></div>
                                <div className="right-arrow desktop-only" onClick={() => this.rightScroll(1)}><FontAwesomeIcon icon={faChevronRight} /></div>
                            </div>
                        </div>
                        <div className="container-fluid mb-5">
                            <div>
                                {/* <div className="feature-image my-4 mr-2"></div> */}
                                <div className="event-type-title mt-3 mx-3">Upcoming Events</div>
                                <div className="carousel-holder">
                                    <div className="mt-4 event-carousel" id="event2">
                                        <div className="empty-space mx-4 desktop-only"></div>
                                        {this.afterToday(this.state.events).map((event, idx) => (
                                        
                                                <div className="event-carousel-item mt-4 mx-2" style={{backgroundImage: "url('/myEvents/" + event["code"] + ".png')"}}  key={idx} onClick={() => window.open("/events/" + event["code"])}>
                                                    <div>
                                                        {event["name"]}
                                                    </div>
                                                </div>

                                        ))}
                                        <div className="empty-space mx-5 desktop-only">&nbsp;</div>
                                    </div>
                                    <div className="left-arrow desktop-only" onClick={() => this.leftScroll(2)}><FontAwesomeIcon icon={faChevronLeft} /></div>
                                    <div className="right-arrow desktop-only" onClick={() => this.rightScroll(2)}><FontAwesomeIcon icon={faChevronRight} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state,
});

const mapDispatchToProps = () => ({
    loginUser: loginUser,
    logoutUser: logoutUser
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
