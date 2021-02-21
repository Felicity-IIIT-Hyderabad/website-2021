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
                event:myEvent[0]
            });
        });
    }


    checkLiveOrNot = (obj) => {
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.start_date);
        var today = new Date();
        var flag = 1;
        console.log(obj);
        for (let ind = 0; ind < this.state.myEvents.length; ind++) {
            if(this.state.myEvents[ind]["code"] == obj.code){
                flag = 0;
            }
        }
        if(!flag){
            return(
                <button className="btn btn-success rounded-pill py-2 w-100 desktop-only">Registered</button>
            );
        }
        if(startDate > today){
            return(
                <button onClick={() => showModalEventOne(obj)}  className="btn btn-danger rounded-pill py-2 w-100 desktop-only">Registered</button>
            );
        }
        else if(startDate <= today && endDate > today){
            return(
                <button onClick={() => showModalEventOne(obj)} className="btn btn-warning rounded-pill py-2 w-100 desktop-only">Join Now</button>
            );
        }
        else{
            return(
                <button className="btn btn-secondary rounded-pill py-2 w-100 desktop-only">Over</button>
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
                            {this.checkLiveOrNot(this.state.event)}
                        </div>
                        <h1 className="text-white mt-3"><strong>Prizes</strong></h1>
                        <ol className="text-white single-event-details">
                            {checkUndef(this.state.event.prizes).map((obj,ind)=>
                                <li key={ind}>
                                    {obj}
                                </li>
                            )}
                        </ol>
                        <h1 className="text-white mt-3"><strong>Organizers</strong></h1>
                        <ul className="text-white single-event-details">
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

