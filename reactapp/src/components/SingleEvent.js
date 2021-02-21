//import Contact from "./Contact";
//import Navbar from "./Navbar";
//import "./Sponsors.css";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import { Col, Row, Button, Card, CardBody, CardTitle } from "reactstrap";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { eventsBaseApi, eventsRegisteredApi, eventsRegisterApi, eventsApi } from "../api/";

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
            axios.post(eventsBaseApi + "/" + event["code"] + "/register",{
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
            event: []
        }
    }

    componentDidMount = () => {
        var eventId = this.props.match.params["0"];
        axios.get(eventsRegisteredApi,{
            headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
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
                event:myEvent[0]
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
            <div className="container events-list" style={{ marginTop: "6rem" }}>
                <Row>
                    <Col md={12}>
                        {/* <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card> */}
                        <Card style={{ background: "black", color:"white", borderColor: "white" }}>
                            <CardBody>
                                <div className="text-right">
                                    {this.checkLiveOrNot(this.state.event)}
                                    <br/>
                                    Deadline:{this.state.event.end_date}
                                </div>
                                <div className="text-left">
                                Prizes worth:  
                                {console.log(this.state.event)}
                                    <ul>
                                        <li>
                                            A
                                        </li>
                                        <li>
                                            B
                                        </li>
                                        <li>
                                            B
                                        </li>
                                        <li>
                                            B
                                        </li>                                                                                        
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} style={{  marginRight: "0rem" }}>
                        <Card style={{ color:"white", backgroundColor: "black", borderColor:"white" }}>
                            <CardTitle>
                                NAME: {this.state.event.name}
                                <br/>
                                DESCRIPTION:{this.state.event.description}
                            </CardTitle>
                            <CardBody>
                                Organizers:
                                <ul>
                                    {checkUndef(this.state.event.organizer_names).map((obj,ind)=>
                                        <li>
                                            {obj}
                                        </li>
                                    )}
                                </ul>
                                Rules:
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ color:"white", backgroundColor: "black", borderColor:"white" }}>
                            <CardTitle>
                                LOGO
                            </CardTitle>
                            <CardBody>
                                ADD
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
};

export default SingleEvent;

