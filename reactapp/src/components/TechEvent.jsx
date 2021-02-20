import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Row, Col, Button } from "reactstrap";

import "./Event.css";
// import * as data from "../sample-data/technical-events.json";
// import * as technicalBackend from "../sample-data/events-technical-backend.json";
import { eventsTechnicalApi } from "../api/";

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
            console.log("sent");
            axios.post("https://felicity.iiit.ac.in/backend/events/"+event["code"]+"/register", {
                Authorization: JSON.parse(window.localStorage.getItem("user")).token
            });
        } 
    });
};

const dateToString = (num1, num2) => {
    let unix_timestamp = 100;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    
    // Will display time in 10:30:23 format
    var formattedTime = hours + ":" + minutes.substr(-2);
    console.log(formattedTime);

    var rr = new Date(num1);
    console.log(rr.getDate());

    return num1 + "\tTo\t" + num2;
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
            console.log(response.data);
            await this.setState({
                events: response.data
            });
        });
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
                                                <Button onClick={() => showModalEventOne(obj)} color="danger">Register Now</Button>
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
