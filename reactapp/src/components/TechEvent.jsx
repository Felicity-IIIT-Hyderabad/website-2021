import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Swal from "sweetalert2";

import "./Event.css";
import * as data from "../sample-data/technical-events.json";

const showModalEventOne = () => {
    Swal.fire({
        title: "Felicity Event One",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        footer: "Coming Soon.",
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
    });
};

const dateToString = (num) => {
    let unix_timestamp = num;
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
    return formattedTime;
};

class TechEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events:data
        };
    }

    componentDidMount = () => {
        console.log(this.state.events);
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
                        {this.state.events.default["Day1"].map((obj,ind)=>{
                            return(
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}                                    
                                    date={dateToString(obj.time)}
                                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                                    iconOnClick={showModalEventOne}
                                    onTimelineElementClick={showModalEventOne}
                                    key={ind}
                                >
                                    <h3 className="vertical-timeline-element-title">{obj.name}</h3>
                                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                                    <p>
                                        {obj.description}
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
