import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Row, Col, Button } from "reactstrap";

import "./Event.css";
// import * as data from "../sample-data/technical-events.json";
// import * as technicalBackend from "../sample-data/events-technical-backend.json";
import { eventsTechnicalApi, eventsRegisteredApi, eventsRegisterApi, eventsApi } from "../api/";

const showModalEventOne = (event) => {
    Swal.fire({
        title: event["name"],
        text: event["description"],
        footer: "Coming Soon.",
        imageUrl: "/teams/a.jpg",
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
            axios.post(eventsApi + "/" + event["code"] + "/register",{
                headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res)=>{
                console.log(res)
            }).catch((error)=>
                console.log(error)
            );
        } 
    });
};

function amOrPM(hours){
    if(hours >= 12){
        return "\t PM"
    }
    else{
        return "\t AM"
    }
}

function addSuperScript(number){
    console.log(number % 10);
    if(number % 10 > 4 || (number % 10 == 0)){
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
    var formattedTime = day + addSuperScript(day) +  "\t" + month[mon] + "\t" +  hours + ":" + minutes.substr(-2) + amOrPM(hours);;
    return formattedTime;
}

const dateToString = (num1, num2) => {
    return formatDate(num1) + "\t To \t" + formatDate(num2);
};

class TechEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount = () => {
        axios.get(eventsTechnicalApi).then(async (response)=>{
            await this.setState({
                events: response.data
            });
        });
    }

    checkLiveOrNot = (obj) => {
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.end_date);
        var today = new Date();
        axios.get(eventsRegisteredApi,{
            headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
        }).then((res)=>{
            {
                console.log(res.data);
                var flag = 1;
                for (let ind = 0; ind < res.data.length; ind++) {
                    if(res.data[ind]["code"] == obj.code){
                        flag = 0;
                        console.log("registered already");
                    }
                }
                if(!flag){
                    return(
                        <Button color="success">Registered</Button>
                    )
                }
            }
        }).catch((error)=>
            console.log(error)
        );
        if(startDate > today){
            return(
                <Button onClick={() => showModalEventOne(obj)} color="danger">Register Now</Button>
            );
        }
        else if(startDate <= today && endDate > today){
            return(
                <Button onClick={() => showModalEventOne(obj)} color="warning">Join Now</Button>
            );
        }
        else{
            return(
                <Button color="info">Over</Button>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="image-absolute">
                    <div id="tech-circle4"></div>
                    <div id="tech-circle3"></div>
                    <div id="tech-circle2"></div>
                    <div id="tech-circle1"></div>
                    <div id="tech-circle-image"></div>
                </div>

                <div className="font-weight-bold infopage-title my-5 mx-5 event-heading text-white"> TECHNICAL </div>

                <div className="container event-list">
                    <div className="text-center mt-5">
                        <div className="text-white my-3 main-description">
                            Technical events are the backbone of Felicity, we proudly hail some of the best coding and explorative events.
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <VerticalTimeline>
                        {this.state.events.map((obj,ind)=>{
                            return(
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}                                    
                                    date={dateToString(obj.start_date,obj.end_date)}
                                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                    key={ind}
                                >
                                    <h3 className="vertical-timeline-element-title">{obj.name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{obj.tagline}</h4>
                                    <p>
                                        {obj.description}
                                        <br/>
                                        <Row>
                                            <Col md={4} xs={3}>
                                                {this.checkLiveOrNot(obj)}
                                            </Col>
                                            <Col md={4} xs={1}></Col>                                 
                                            <Col md={4} xs={2}>
                                                <Button onClick={() => window.open("/events/" + obj.code.toString())} color="warning">More Details</Button>
                                            </Col>
                                        </Row>
                                    </p>
                                </VerticalTimelineElement>
                            );
                        })}
                        <VerticalTimelineElement
                            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                        />
                    </VerticalTimeline>

                </div>
            </div>
        );
    }
}

export default TechEvent;
