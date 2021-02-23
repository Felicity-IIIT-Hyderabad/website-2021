import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Row, Col, Button } from "reactstrap";

import "./Event.css";
// import * as culturalEvents from "../sample-data/cultural-events.json";
// import * as culturalEventsBackend from "../sample-data/cultural-events-backend.json";
import { eventsCulturalApi, eventsRegisteredApi, eventsBaseApi } from "../api/";
import { formatDate,formatDate2,checkUndef,checkExpired, checkLiveOrNot ,fireSuccess,fireFailure, showModalEvent, showModalEventOne, showModalEventUnregister } from "./helpfunctions";


class CultEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events: [],
            myEvents:[],
            cultEvents: [],
            selectedDay: "Day1",
            teamName:""
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
        axios.get(eventsRegisteredApi,{headers:{"Authorization":JSON.parse(window.localStorage.getItem("user")).token}}
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

            var cultEventsData = this.sortDateWise(response.data).filter((obj)=> obj.type == "cultural");

            this.setState({
                events: response.data,
                cultEvents: cultEventsData
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

    changeTeamName(event){
        this.setState({
            teamName:event.target.value
        })
    }

    prepDescription(event){
        return(
            <>
            {event["description"]} <br/>
            <input type="text" className="invite-input p-2 w-50" value={this.state.teamName} onChange={(event) => this.changeTeamName(event) } /> <br/><br/><br/>
            </>
        );
    }

    changeDay = async (dayNum) => {
        await this.setState({
            selectedDay: "Day"+dayNum
        });
    };
    
    dateToString = (num1, num2) => {
        return formatDate(num1) + "\t To \t" + formatDate(num2);
    };

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
                        </div>
                        <div className="text-white my-3 main-description">
                            The days events are fascinating, they are full of surprises hidden. Stay tuned to find out.
                        </div>
                    </div>
                </div>

                <div className="my-5">

                    <VerticalTimeline>
                        {this.state.cultEvents.map((event, idx) => (
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
                                            {checkLiveOrNot(event)}
                                        </Col>
                                        <Col md={4} xs={1}></Col>                                 
                                        <Col md={4} xs={2}>
                                            <Button onClick={() => window.open("/event/" + event.code.toString())} color="warning">More Details</Button>
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
