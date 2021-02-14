import { useState } from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Swal from "sweetalert2";

import "./Event.css";
import Navbar from "./Navbar";
import * as culturalEvents from "../sample-data/cultural-events.json";

const CultEvent = () => {

    const [selectedDay, setSelectedDay] = useState("Day1");

    document.body.style.backgroundColor = "#0F2028";

    const showModalEvent = (event) => {
        Swal.fire({
            title: event["name"],
            text: event["description"],
            footer: "Launches on: " + dateToString(event["time"]),
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

    const changeDay = (dayNum) => {
        setSelectedDay("Day" + dayNum);
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

    return (
        <div>
            <Navbar/>
            <div className="image-absolute">
                <div id="cult-circle4"></div>
                <div id="cult-circle3"></div>
                <div id="cult-circle2"></div>
                <div id="cult-circle1"></div>
            </div>

            <div className="font-weight-bold infopage-title my-5 mx-5 event-heading text-white"> CULTURAL </div>

            <div className="container event-list">
                <div className="text-center mt-5">
                    <div className="text-white font-weight-bold d-flex justify-content-center days">
                        <h2 className={selectedDay === "Day1" ? "mx-3 text-danger day" : "mx-3 text-info day"} onClick={() => changeDay(1)}>DAY 1</h2>
                        <h2 className={selectedDay === "Day2" ? "mx-3 text-danger day" : "mx-3 text-info day"} onClick={() => changeDay(2)}>DAY 2</h2>
                        <h2 className={selectedDay === "Day3" ? "mx-3 text-danger day" : "mx-3 text-info day"} onClick={() => changeDay(3)}>DAY 3</h2>
                    </div>
                    <div className="text-white my-3 main-description">
                        The days events are fascinating, they are full of surprises hidden. Stay tuned to find out.
                    </div>
                </div>
            </div>

            <div className="my-5">

                <VerticalTimeline>
                    {culturalEvents.default[selectedDay].map((event, idx) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(133, 150, 243)", color: "#fff" }}
                            iconOnClick={() => showModalEvent(event)}
                            date={dateToString(event["time"])}
                            onTimelineElementClick={() => showModalEvent(event)}
                            dateClassName={"my-date"}
                            key={idx}
                        >
                            <h3 className="vertical-timeline-element-title">{event["name"]}</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">{event["time"]}</h4> */}
                            <p>
                                {event["description"]}
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
};

export default CultEvent;