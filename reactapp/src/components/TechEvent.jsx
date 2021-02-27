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
import { formatDate,formatDate2,compareFunc , checkUndef, checkExpired,fireSuccess,fireFailure, showModalEventOne, showModalEventUnregister, dateToString, showModalEvent } from "./helpfunctions";



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
        return array.sort(compareFunc)
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
        return {"filtered":filteredArray, "dirt":dirt};
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
            var filteredArray = this.sortDateWise(this.filterArray(response.data).filtered).concat(this.filterArray(response.data).dirt);
            this.setState({
                events: filteredArray
            });
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
                <Button className="black-border" color="success">Registered</Button>
            )
        }        
        if(startDate > today){
            return(
                <>
                    <Button className="black-border" onClick={() => showModalEvent(obj)} color="danger">Register</Button>
                </>
            );
        }
        else if(startDate <= today && endDate > today){
            return(
                <Button  className="black-border" onClick={() => showModalEvent(obj)} color="warning">Join Now</Button>
            );
        }
        else{
            return(
                <Button className="black-border" color="secondary">Over</Button>
            );
        }
    }
    
    renderIconColor(obj){
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.end_date);
        var today = new Date();
        if(startDate > today){
            return { background: "#dc3545", color: "#fff" };
        }
        else if(startDate <= today && endDate > today){
            return { background: "#ffc107", color: "#fff" };
        }
        else{
            return { background: "#28a745", color: "#fff" };
        }

    }

    renderContentColor(ind){
        var mod = ind % 5;
        if(mod == 0){
            return { background: "#e68f76", color: "#fff" };
        }
        else if(mod == 1){
            return { background: "#85dcbe", color: "#fff" };
        }
        else if(mod == 2){
            return { background: "#e8a87c", color: "#fff" };
        }
        else if(mod == 3){
            return { background: "#c38d93", color: "#fff" };
        }
        else if(mod == 4){
            return { background: "#41b343", color: "#fff" };
        }        
    }

    renderContentColor2(ind){
        var mod = ind % 5;
        var colorr = "#272727";
        if(mod == 0){
            return { background: colorr, color: "#ff652f" };
        }
        else if(mod == 1){
            return { background: colorr, color: "#ffe400" };
        }
        else if(mod == 2){
            return { background: colorr, color: "#d5f7d5" };
        }
        else if(mod == 3){
            return { background: colorr, color: "#ff652f" };
        }
        else if(mod == 4){
            return { background: colorr, color: "#ffe400" };
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
                                    contentStyle={this.renderContentColor2(ind)}                                    
                                    date={dateToString(obj.start_date,obj.end_date)}
                                    iconStyle={this.renderIconColor(obj)}
                                    key={ind}
                                    dateClassName={"my-date text-white date-big"}
                                >
                                    <h3 className="vertical-timeline-element-title">{obj.name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{obj.organizer_clubs}</h4>
                                    <p>
                                        <br/>
                                        <Row>
                                            <Col md={4} xs={3}>
                                                {this.checkLiveOrNot(obj)}
                                            </Col>
                                            <Col md={4} xs={1}></Col>                                 
                                            <Col md={4} xs={2}>
                                                <Button className="black-border" onClick={() => window.open("/event/" + obj.code.toString())} color="warning">More Details</Button>
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
