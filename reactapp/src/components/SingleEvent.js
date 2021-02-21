//import Contact from "./Contact";
//import Navbar from "./Navbar";
//import "./Sponsors.css";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import { Col, Row, Button, Card, CardBody, CardTitle } from "reactstrap";
import React from "react";
import axios from "axios";
import { eventsApi } from "../api/";
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
        console.log(string.split(","));
        console.log("AAAAAAAAAAA");
        return string.split(",");
    }
}


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
        axios.get(eventsApi).then(async (response)=>{
            console.log(response.data);
            var myEvent = response.data.filter((obj) => obj.code == eventId);
            console.log(myEvent[0]);
            this.setState({
                event:myEvent[0]
            });
            // response.data.map((obj)=>{
            //     console.log(obj.start_date.slice(8,10));
            //     var dateOfEvent = obj.start_date.slice(8,10);
            //     if(dateOfEvent == "24"){
            //         tempCultEvents["Day1"].push(obj);
            //     }
            //     else if(dateOfEvent == "25"){
            //         tempCultEvents["Day2"].push(obj);
            //     }
            //     else if(dateOfEvent == "26"){
            //         tempCultEvents["Day3"].push(obj);
            //     }
            // });

            // await this.setState({
            //     events: tempCultEvents
            // });
        });    
        console.log(this.props.match.params["0"]);

    }

    checkLiveOrNot = (obj) => {
        var startDate = new Date(obj.start_date);
        var endDate = new Date(obj.start_date);
        var today = new Date();
        if(startDate > today){
            return(
                <Button onClick={() => this.showModalEvent(obj)} color="danger">Register Now</Button>
            );
        }
        else if(startDate <= today && endDate > today){
            return(
                <Button onClick={() => this.showModalEvent(obj)} color="warning">warning</Button>
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

