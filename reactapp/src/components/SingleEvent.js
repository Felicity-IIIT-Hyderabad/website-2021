//import Contact from "./Contact";
//import Navbar from "./Navbar";
//import "./Sponsors.css";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { eventsBaseApi, eventsRegisteredApi, eventsRegisterApi, eventsApi } from "../api/";

import "./SingleEvent.css";

// import { Button } from "react-scroll";

function checkUndef(string){
    if(string == undefined){
        return [];
    }
    else{
        return string.split(",");
    }
}

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
        return "\t "
    }
    else{
        return "\t "
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


const showModalEventOne = (event) => {
    Swal.fire({
        title: event["name"],
        text: event["description"],
        footer: "Deadline:" + formatDate(event["end_date"]),
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

const showModalEventUnregister = (event) => {
    Swal.fire({
        title: event["name"],
        text: "Are you sure you want to unregister?",
        footer: "Deadline:" + formatDate(event["end_date"]),
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
        confirmButtonText: "Unregister",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: "Cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            axios.post(eventsBaseApi + "/" + event["code"] + "/exitteam",{},{
                headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res)=>{
                window.location.reload();
            }).catch((error)=>
                console.log(error)
            );
        } 
    });
};


//#TODO: Add club logo to JSON data and change second image to {poster}
class SingleEvent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            myEvents: [],
            event: []
        };
    }

    componentDidMount = () => {
        document.getElementById(this.props.match.params["0"] + "myid").style.backgroundImage = 'url(/myEvents/' + this.props.match.params["0"] + '.png)';
        var eventId = this.props.match.params["0"];
        axios.get(eventsRegisteredApi,{
            headers: { "Authorization":JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")).token : "" }
        }).then((res)=>{
            {
                this.setState({
                    myEvents: res.data
                });
            }
        }).catch((error)=>
            console.log(error)
        );        
        axios.get(eventsApi).then(async (response)=>{
            var myEvent = response.data.filter((obj) => obj.code == eventId);
            this.setState({
                event: myEvent[0] ? myEvent[0] : []
            });
        });
    }


    checkLiveOrNot = (obj) => {
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.start_date);
        var today = new Date();
        var flag = 1;
        console.log(startDate);
        console.log(endDate);
        console.log(today);
        for (let ind = 0; ind < this.state.myEvents.length; ind++) {
            if(this.state.myEvents[ind]["code"] == obj.code){
                flag = 0;
            }
        }
        if(!flag){
            return(
                <>
                <button className="btn btn-success rounded-pill py-2 w-100">Registered</button>
                <button onClick={() => showModalEventUnregister(obj)}  className="btn btn-danger rounded-pill py-2 w-100">Unregister</button>
                </>
            );
        }
        if(startDate >= today){
            return(
                <>
                <button onClick={() => showModalEventOne(obj)}  className="btn btn-danger rounded-pill py-2 w-100">Register</button>
                </>
            );
        }
        else if(startDate < today && endDate > today){
            return(
                <button onClick={() => showModalEventOne(obj)} className="btn btn-warning rounded-pill py-2 w-100">Join Now</button>
            );
        }
        else{
            return(
                <button className="btn btn-secondary rounded-pill py-2 w-100 desktop-only">Over</button>
            );
        }
    }

    dateToString = (num1, num2) => {
        return formatDate(num1) + "\t To \t" + formatDate(num2);
    };

    // var url = "../images/" + this.props.match.params["0"] + ".png";

    render(){
        return (
            <div className="container-fluid events-list" style={{ marginTop: "6rem", backgroundColor: "white", color:"black" }}>
                <div className="banner" id={this.props.match.params["0"] + "myid"}>
                </div>
                <div className="row mt-5 mx-2">
                    <div className="col-md-8 single-event-contain">
                        {console.log(this.state.event.description)}
                        {console.log("AA")}
                        <h1 className=""><strong>{this.state.event.name}</strong></h1>
                        <p className="mt-3">{this.state.event == undefined ? "" : this.state.event.description}</p>
                        <h2 className="mt-3">{this.dateToString(this.state.event.start_date,this.state.event.end_date)}</h2>
                    </div>
                    <div className="col-md-4 px-3">
                        <div className="text-center">
                            {this.checkLiveOrNot(this.state.event)}
                        </div>
                        <h1 className=" text-center mt-3"><strong>Prizes</strong></h1>
                        {checkUndef(this.state.event.prizes).length > 1 ? 
                        <ol className="">
                        {checkUndef(this.state.event.prizes).map((obj,ind)=>
                            <li key={ind}>
                                {obj}
                            </li>
                        )}
                        </ol>
                            : 
                            <div className=" bold">
                                &#8377; {checkUndef(this.state.event.prizes)[0]}
                            </div>
                        }
                        <h1 className=" text-center mt-3"><strong>Organizers</strong></h1>
                        <h3 className=" mt-2"><strong>
                            {this.state.event == undefined ? "": this.state.event.organizer_clubs}
                            </strong>
                        </h3>                        
                        <ul className="">
                            {checkUndef(this.state.event.organizer_names).map((obj,ind)=>
                                <li key={ind}>
                                    {obj}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default SingleEvent;

