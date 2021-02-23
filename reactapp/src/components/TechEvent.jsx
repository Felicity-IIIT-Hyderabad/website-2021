import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Row, Col, Button } from "reactstrap";

import "./Event.css";
// import * as data from "../sample-data/technical-events.json";
// import * as technicalBackend from "../sample-data/events-technical-backend.json";
import { eventsTechnicalApi, eventsRegisteredApi, eventsRegisterApi, eventsBaseApi } from "../api/";
import { formatDate,formatDate2,checkUndef, checkLiveOrNot ,checkExpired,fireSuccess,fireFailure, showModalEventOne, showModalEventUnregister, dateToString, showModalEvent } from "./helpfunctions";



class TechEvent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            events: [],
            myEvents: []
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

    filterArray(array){
        var filteredArray = [];
        var dirt = [];
        for (let ind = 0; ind < array.length; ind++) {
            if(array[ind].start_date == null || array[ind].end_date == null){
                dirt.push(array[ind]);
            }
            else{
                filteredArray.push(array[ind]);
            }
        }
        console.log(filteredArray);
        filteredArray =  filteredArray.concat(dirt);
        console.log(dirt);        
        return filteredArray;
    }

    getRegisteredEvents(){
        axios.get(eventsRegisteredApi,{
            headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}}
        ).then(async (res)=>{
            this.setState({
                myEvents: res.data
            })
        }).catch((error)=>
            console.log(error)
        );
    }

    getEvents(){
        axios.get(eventsTechnicalApi).then(async (response)=>{
            var array = this.sortDateWise(response.data);
            console.log(array);
            var filteredArray = this.filterArray(array);
            this.setState({
                events: filteredArray
            });
            // console.log(this.sortDateWise(response.data));
        });
    }

    componentDidMount = () => {     
        // setInterval(this.getRegisteredEvents, 3000);
        // setInterval(this.getRegisteredEvents, 3000);
        try{
            this.getRegisteredEvents();
        }
        catch{
            
        }
        this.getEvents();
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
                                    dateClassName={"my-date text-white date-big"}
                                >
                                    <h3 className="vertical-timeline-element-title">{obj.name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{obj.organizer_clubs}</h4>
                                    <p>
                                        <br/>
                                        <Row>
                                            <Col md={4} xs={3}>
                                                {checkLiveOrNot(obj)}
                                            </Col>
                                            <Col md={4} xs={1}></Col>                                 
                                            <Col md={4} xs={2}>
                                                <Button onClick={() => window.open("/event/" + obj.code.toString())} color="warning">More Details</Button>
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
