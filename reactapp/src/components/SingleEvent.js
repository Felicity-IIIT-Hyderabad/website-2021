//import Contact from "./Contact";
//import Navbar from "./Navbar";
//import "./Sponsors.css";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import { Col, Row, Button, Card, CardBody, CardTitle } from "reactstrap";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { eventsApi, eventsRegisteredApi, eventsRegisterApi } from "../api/";

import "./SingleEvent.css"

// import { Button } from "react-scroll";
const classes = {
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 20,
        textAlign: "center",
        fontFamily: "Roboto",
    },
};

function checkUndef(string){
    if(string == undefined){
        return [];
    }
    else{
        return string.split(",");
    }
}

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
            axios.get(eventsRegisteredApi,{
                headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res)=>{
                console.log(res)
            });
            axios.post(eventsRegisterApi,{
                headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res)=>{
                console.log(res)
            });
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
        }
    }

    componentDidMount = () => {
        var eventId = this.props.match.params["0"];
        axios.get(eventsRegisteredApi,{
            headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")).token : ""}
        }).then((res)=>{
            {
                this.setState({
                    myEvents: res.data
                })
            }
        }).catch((error)=>
            console.log(error)
        );        
        axios.get(eventsApi).then(async (response)=>{
            console.log(response.data);
            var myEvent = response.data.filter((obj) => obj.code == eventId);
            console.log(myEvent[0]);
            this.setState({
                event: myEvent[0] ? myEvent[0] : []
            });
        });    
        console.log(this.props.match.params["0"]);

    }


    checkLiveOrNot = (obj) => {
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.start_date);
        var today = new Date();
        var flag = 1;
        for (let ind = 0; ind < this.state.myEvents.length; ind++) {
            if(this.state.myEvents[ind]["code"] == obj.code){
                flag = 0;
                console.log("registered already");
            }
        }
        if(!flag){
            console.log("okay");
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
                <Button color="success">Over</Button>
            );
        }
    }

    render(){
        return (
            <div className="container-fluid events-list" style={{ marginTop: "6rem" }}>

                <div className="banner">
                </div>

                <div className="row mt-5 mx-2">
                    <div className="col-md-8 single-event-contain">
                    <button className="btn btn-primary rounded-pill py-2 px-5 w-100 mb-4 mobile-only">Register Now</button>
                        <h1 className="text-white"><strong>Description</strong></h1>
                        <p className="mt-3 text-white single-event-details">{this.state.event.description}</p>
                    </div>
                    <div className="col-md-4 px-3">
                        <div className="text-center">
                            <button className="btn btn-primary rounded-pill py-2 w-100 desktop-only">Register Now</button>
                        </div>
                        <h1 className="text-white mt-3"><strong>Prizes</strong></h1>
                        <ul className="text-white single-event-details">
                            {checkUndef(this.state.event.organizer_names).map((obj,ind)=>
                                <li>
                                    {obj}
                                </li>
                            )}
                        </ul>
                        <h1 className="text-white mt-3"><strong>Organizers</strong></h1>
                        <ul className="text-white single-event-details">
                            {checkUndef(this.state.event.organizer_names).map((obj,ind)=>
                                <li>
                                    {obj}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
};

export default SingleEvent;

