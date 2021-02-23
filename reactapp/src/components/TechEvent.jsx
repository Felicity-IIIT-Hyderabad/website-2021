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

const showModalEventOne = async (event) => {
    if(event.registration_link != ""){
        window.open(event.registration_link);
    }
    else{            
        const { value: text } = await Swal.fire({
            title:  event["name"],
            input: 'textarea',
            inputLabel: event["description"] + "\n Enter your team name below",
            inputPlaceholder: 'Should not exceed 32 characters...',
            inputAttributes: {
              'aria-label': 'Type your message here',
              'height': '10'
            },
            customClass: {
                title: " error-message",
                content: "error-message",
                confirmButton: "game-button bg-danger",
                image: "error-image-swal",
                footer: "text-danger error-message"
            },                
            width: "40vw",
            background: "white",
            confirmButtonText: "Register Now",
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: "Not Now"           
        })
        if(true){
            console.log(text);
            if(text == ""){
                axios.post(eventsBaseApi + "/" + event["code"] + "/register",{},{
                    headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
                }).then((res)=>{
                    window.location.reload();
                }).catch((error)=>
                    console.log(error)
                );                
            }            
            else{
                if (true) {
                    axios.post(eventsBaseApi + "/" + event["code"] + "/register?name=" + text,{},{
                        headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
                    }).then((res)=>{
                        window.location.reload();
                    }).catch((error)=>
                        console.log(error)
                    );
                }
            }
        }   
    } 
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
    if(number % 10 >= 4 || (number % 10 == 0)){
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
    if(num1 == null || num2 == null){
        return "Coming Soon!";
    }
    return formatDate(num1) + "\t To \t" + formatDate(num2);
};

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

    checkLiveOrNot = (obj) => {
        if(obj.start_date == null || obj.start_date == null ){
            console.log("null");
            return(
                <Button color="secondary">Coming Soon</Button>
            );            
        }
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
                <Button color="secondary">Over</Button>
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
