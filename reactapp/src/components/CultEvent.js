import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Row, Col, Button } from "reactstrap";

import "./Event.css";
// import * as culturalEvents from "../sample-data/cultural-events.json";
// import * as culturalEventsBackend from "../sample-data/cultural-events-backend.json";
import { eventsCulturalApi, eventsRegisteredApi, eventsRegisterApi, eventsBaseApi } from "../api/";

function addSuperScript(number){
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
    if(hours > 12){
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
            myEvents:[],
            cultEvents: { "Day1":[],"Day2":[],"Day3":[] },
            selectedDay: "Day1"
        };
    }

    compare(a,b){
        var date1 = new Date(a.start_date);
        var date2 = new Date(b.start_date);
        return date1 > date2;
    }

    sortDateWise(array){
        return array.sort(this.compare)
    }

    getRegisteredEvents(){
        axios.get(eventsRegisteredApi,{},{header:{"Authorization":JSON.parse(window.localStorage.getItem("user")).token}}
        ).then(async (res)=>{
            this.setState({
                myEvents: res.data
            })
        }).catch((error)=>
            console.log(error)
        );
    }

    getEvents(){
        var tempCultEvents = { "Day1":[],"Day2":[],"Day3":[] };        
        axios.get(eventsCulturalApi).then(async (response)=>{
            this.setState({
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

            tempCultEvents["Day1"] = this.sortDateWise(tempCultEvents["Day1"])                    
            tempCultEvents["Day2"] = this.sortDateWise(tempCultEvents["Day2"])                    
            tempCultEvents["Day3"] = this.sortDateWise(tempCultEvents["Day3"])

            console.log(this.sortDateWise(tempCultEvents["Day1"]));

            await this.setState({
                cultEvents: tempCultEvents
            });
        });
    }
    
    componentDidMount = async () => {
        // setInterval(this.getRegisteredEvents, 3000);
        // setInterval(this.getEvents, 3000);
        try{
            this.getRegisteredEvents();
        }
        catch{
            
        }
        this.getEvents();
        document.body.style.backgroundColor = "#0F2028";
    };

    showModalEvent = (event) => {
        Swal.fire({
            title: event["name"],
            text: event["description"],
            footer: "Deadline:" +  formatDate(event["end_date"]),
            imageUrl: "/teams/sample.jpg",
            customClass: {
                title: " error-message",
                content: "error-message",
                confirmButton: "game-button bg-danger",
                image: "error-image-swal",
                footer: "text-danger error-message"
            },
            width: "64em",
            background: "white",
            confirmButtonText: "Register Now",
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: "Not Now",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(eventsBaseApi + "/" + event["code"] + "/register",{},{
                    headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
                }).then((res)=>{
                    window.location.reload();
                }).catch((error)=>
                    console.log(error)
                );
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
        var endDate = new Date(obj.end_date);
        var today = new Date();
        var flag = 1;
        for (let ind = 0; ind < this.state.myEvents.length; ind++) {
            if(this.state.myEvents[ind]["code"] == obj.code){
                flag = 0;
            }
        }
        if(!flag){
            return(
                <Button color="success">Registered</Button>
            )
        }        
        if(startDate > today){
            return(
                <Button onClick={() => this.showModalEvent(obj)} color="danger">Register Now</Button>
            );
        }
        else if(startDate <= today && endDate > today){
            return(
                <Button onClick={() => this.showModalEvent(obj)} color="warning">Join Now</Button>
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
                                contentArrowStyle={{ borderRight: "20px solid  rgb(33, 150, 243)" }}
                                iconStyle={{ background: "rgb(133, 150, 243)", color: "#fff" }}
                                date={this.dateToString(event["start_date"], event["end_date"])}
                                dateClassName={"my-date text-white date-big"}
                                key={idx}
                            >
                                <h3 className="vertical-timeline-element-title">{event["name"]}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{event["organizer_clubs"]}</h4>
                                <p>
                                    {/* {event["description"]} */}
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
