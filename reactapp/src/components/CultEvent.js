import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Row, Col, Button } from "reactstrap";

import "./Event.css";
// import * as culturalEvents from "../sample-data/cultural-events.json";
// import * as culturalEventsBackend from "../sample-data/cultural-events-backend.json";

import { eventsCulturalApi } from "../api/";

function addSuperScript(number){
    console.log(number % 10);
    if((number % 10 >= 4) || (number % 10 == 0)){
        return "th"
    }
    else if(number % 10 == 3){
        return "rd"
    }
    else if(number % 10 == 2){
        return "nd"
    }
    else if(number % 10 == 1){
        return "st"
    }        
}

function amOrPM(hours){
    if(hours >= 12){
        return "\t PM"
    }
    else{
        return "\t AM"
    }
}

function formatDate(num1){
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var startDate = new Date(num1);
    // var endDate = new Date(num2);
    var day = startDate.getDate();
    var mon = startDate.getMonth();
    // Hours part from the timestamp
    var hours = startDate.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + startDate.getMinutes();

    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    // Will display time in 10:30:23 format
    var formattedTime = day + addSuperScript(day) +  "\t" + month[mon] + "\t" +  hours + ":" + minutes.substr(-2) + amOrPM(hours);
    return formattedTime;
}

class CultEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events: [],
            cultEvents: { "Day1":[],"Day2":[],"Day3":[] },
            selectedDay: "Day1"
        };
    }

    componentDidMount = async () => {

        var tempCultEvents = { "Day1":[],"Day2":[],"Day3":[] };
        axios.get(eventsCulturalApi).then(async (response)=>{
            await this.setState({
                events: response.data
            });
            response.data.map((obj)=>{
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
                cultEvents: tempCultEvents
            });
        });

        document.body.style.backgroundColor = "#0F2028";
    };

    showModalEvent = (event) => {
        Swal.fire({
            title: event["name"],
            text: event["description"],
            footer: "Launches on: " + this.dateToString(event["time"]),
            imageUrl: "/images/sample.jpg",
            customClass: {
                title: "text-danger error-message",
                content: "error-message text-white",
                confirmButton: "game-button bg-danger",
                image: "error-image-swal",
            },
            width: "64em",
            background: "rgba(0,0,0,1)",
            confirmButtonText: "Register Now",
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: "Not Now",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("https://felicity.iiit.ac.in/backend/events/"+event["code"]+"/register", {
                    Authorization: JSON.parse(window.localStorage.getItem("user")).token
                });
            } 
        });
    };

    changeDay = async (dayNum) => {
        await this.setState({
            selectedDay: "Day"+dayNum
        });
    };
    
    dateToString = (num1, num2) => {
        return formatDate(num1) + "\t To \t" + formatDate(num2);
    };

    checkLiveOrNot = (obj) => {
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.start_date);
        var today = new Date();
        if(startDate > today){
            return(
                <Button onClick={() => this.showModalEvent(obj)} color="danger">Register Now</Button>
            );
        }
        else if(startDate <= today && endDate > today){
            return(
                <Button onClick={() => this.showModalEvent(obj)} color="warning">warning</Button>
            );
        }
        else{
            return(
                <Button color="success">Over</Button>
            );
        }
    }

    // axios.get(eventsCulturalApi).then((response)=>{
    //     console.log(response);
    //     cultEvents = {};
    // });

    render() {
        return (
            <div>
                <div className="image-absolute">
                    <div id="cult-circle4"></div>
                    <div id="cult-circle3"></div>
                    <div id="cult-circle2"></div>
                    <div id="cult-circle1"></div>
                    <div id="cult-circle-image"></div>
                </div>

                <div className="font-weight-bold infopage-title my-5 mx-5 event-heading text-white"> CULTURAL </div>

                <div className="container event-list">
                    <div className="text-center mt-5">
                        <div className="text-white font-weight-bold d-flex justify-content-center days">
                            <h2 className={this.state.selectedDay === "Day1" ? "mx-3 text-danger day" : "mx-3 text-info day"} onClick={() => this.changeDay(1)}>DAY 1</h2>
                            <h2 className={this.state.selectedDay === "Day2" ? "mx-3 text-danger day" : "mx-3 text-info day"} onClick={() => this.changeDay(2)}>DAY 2</h2>
                            <h2 className={this.state.selectedDay === "Day3" ? "mx-3 text-danger day" : "mx-3 text-info day"} onClick={() => this.changeDay(3)}>DAY 3</h2>
                        </div>
                        <div className="text-white my-3 main-description">
                            The days events are fascinating, they are full of surprises hidden. Stay tuned to find out.
                        </div>
                    </div>
                </div>

                <div className="my-5">

                    <VerticalTimeline>
                        {this.state.cultEvents[this.state.selectedDay].map((event, idx) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                                iconStyle={{ background: "rgb(133, 150, 243)", color: "#fff" }}
                                date={this.dateToString(event["start_date"], event["end_date"])}
                                dateClassName={"my-date"}
                                key={idx}
                            >
                                <h3 className="vertical-timeline-element-title">{event["name"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{event["tagline"]}</h4>
                                <p>
                                    {event["description"]}
                                    <br/>
                                    <Row>
                                        <Col md={4} xs={3}>
                                            {this.checkLiveOrNot(event)}
                                        </Col>
                                        <Col md={4} xs={1}></Col>                                 
                                        <Col md={4} xs={2}>
                                            <Button onClick={() => window.open("/events/" + event.code.toString())} color="warning">More Details</Button>
                                        </Col>
                                    </Row>                                    
                                </p>
                            </VerticalTimelineElement>
                        ))}
                        <VerticalTimelineElement
                            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                        />                    
                    </VerticalTimeline>

                </div>
            </div>
        );
    }
}

export default CultEvent;
