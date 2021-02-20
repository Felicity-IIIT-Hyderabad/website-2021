import React from "react";
import "./Dashboard.css";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { connect } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { loginUser, logoutUser } from "../actions/login";
import { getUser } from "../actions/login";

const AutoplaySlider = withAutoplay(AwesomeSlider);

var key = 1;

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events: { "Day1":[],"Day2":[],"Day3":[] },
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

    componentDidMount = () => {
        var tempCultEvents = { "Day1":[],"Day2":[],"Day3":[] };
        axios.get("https://felicity.iiit.ac.in/backend/events").then(async (response)=>{
            console.log(response.data);
            response.data.map((obj)=>{
                console.log(obj.start_date.slice(8,10));
                var dateOfEvent = obj.start_date.slice(8,10);
                if(dateOfEvent == "24"){
                    tempCultEvents["Day1"].push(obj);
                }
                else if(dateOfEvent == "25"){
                    tempCultEvents["Day2"].push(obj);
                }
                else if(dateOfEvent == "26"){
                    tempCultEvents["Day3"].push(obj);
                }
            });

            await this.setState({
                events: tempCultEvents
            });
        });

        if(key)
        {
            key = 0;   
            getUser();
        }
    }

    render () {
        return (
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
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-3 left-display">
                            <h2 className="text-center my-3 text-white"><strong>View All Events</strong></h2>
                            <div className="event-days text-center mt-4">
                                <button className="btn event-button mt-4 event-pink"> CULTURAL </button><br/>
                                <button className="btn event-button mt-4 event-green"> TECHNICAL </button><br/>
                                <button className="btn event-button mt-4 event-blue"> WORKSHOPS </button><br/>
                            </div>
                        </div>
                        <div className="col-md-9 right-display">
                            <div className="event-type-title mt-3 mx-3">Upcoming - Day 1</div>
                            <div className="carousel-holder">
                                <div className="mt-4 event-carousel" id="event1">
                                    <div className="empty-space mx-4 desktop-only"></div>
                                    {this.state.events["Day1"].map((event, idx) => (
                                        <div className="event-carousel-item mt-4 mx-2" key={idx}>
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
                    </div>
                    <div className="container-fluid mb-5">
                        <div>
                            <div className="feature-image my-4 mr-2"></div>

                            <div className="event-type-title mt-3 mx-3">Upcoming - Day 2</div>
                            <div className="carousel-holder">
                                <div className="mt-4 event-carousel" id="event2">
                                    <div className="empty-space mx-4 desktop-only"></div>
                                    {this.state.events["Day2"].map((event, idx) => (
                                        <div className="event-carousel-item mt-4 mx-2" key={idx}>
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
