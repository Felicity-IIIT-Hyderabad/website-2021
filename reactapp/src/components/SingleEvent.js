//import Contact from "./Contact";
//import Navbar from "./Navbar";
//import "./Sponsors.css";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Chip from '@material-ui/core/Chip';
import {eventsBaseApi, eventsRegisteredApi, eventsRegisterApi, eventsApi} from "../api/";
import {Button} from "reactstrap";
import { formatDate,formatDate2,formatDate3,check42, checkUndef, checkSpecific,checkExpired,fireSuccess,fireFailure, showModalEventOne, showModalSubmit, showModalEventUnregister } from "./helpfunctions";

import * as extraInfo from "../sample-data/extra-info.json";
import "./SingleEvent.css";

//#TODO: Add club logo to JSON data and change second image to {poster}
class SingleEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myEvents: [],
      event: [],
      eventCode: "",
      teamDetails: {
        "name": "",
        "teamcode": "",
        "members": [],
        "teamInfo": "",
        "custom_info": ""
      }
    };
  }

  getEventCode = (array) => {
    var flag = 1;
    for (let ind = 0; ind < array.length; ind++) {
      if (array[ind]["code"] == this.props.match.params["0"]) {
        flag = 0;
      }
    }
    if (!flag) {
      axios.get(eventsBaseApi + "/" + this.props.match.params["0"] + "/myteam", {
        headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")).token : ""}
      }).then((res) => {
        {
          this.setState({
            teamDetails: res.data,
            eventCode: res.data.teamcode
          });
        }
      }).catch((error) =>
        console.log(error)
      );
    }
  }

  componentDidMount = () => {
    document.getElementById(this.props.match.params["0"] + "myid").style.backgroundImage = 'url(/myEvents/' + this.props.match.params["0"] + '.png)';
    var eventId = this.props.match.params["0"];
    checkExpired();
    axios.get(eventsRegisteredApi, {
      headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")).token : ""}
    }).then((res) => {
      {
        this.setState({
          myEvents: res.data
        });
        this.getEventCode(res.data);
      }
    }).catch((error) => {
    }
    );
    axios.get(eventsApi).then(async (response) => {
      var myEvent = response.data.filter((obj) => obj.code == eventId);
      if (myEvent.length == 0) {
        window.location.href = "/404";
      }
      this.setState({
        event: myEvent[0] ? myEvent[0] : []
      });
    });
  }

  copyClipboard = () => {
    const text = document.getElementById("room_passcode").innerHTML;
    document.getElementById("room_passcode").style.backgroundColor = "wheat";
    const room_textarea = document.getElementById("roomcode_helper");
    room_textarea.innerHTML = text;
    room_textarea.select();
    document.execCommand("copy");
    document.getElementById("copy_info").style.color = "tomato";
    document.getElementById("copy_info").innerHTML = "Code Copied";
  }

  displayUnregisterOrNot(obj){
    if(obj.start_date != undefined){


    var startDate = new Date(obj.start_date);
    var endDate = new Date(obj.end_date);
    var today = new Date();
    if (startDate >= today) {
      return (
        <>
          <button onClick={() => showModalEventUnregister(obj)} className="btn btn-danger rounded-pill single-event-details mt-5 text-white py-2 w-100"><strong>UNREGISTER</strong></button>
        </>
      );
    }
    else if (startDate < today && endDate > today) {
      return (
        <>
        </>
      );
    }
    else {
      return (
        <></>
      );
    }
    }
    else{
      return <div></div>
    }
  }

  checkLiveOrNot = (obj) => {
    var startDate = new Date(obj.start_date);
    var endDate = new Date(obj.end_date);
    var today = new Date();
    var flag = 1;
    for (let ind = 0; ind < this.state.myEvents.length; ind++) {
      if (this.state.myEvents[ind]["code"] == obj.code) {
        flag = 0;
      }
    }
    if (!flag) {
      return (
        <>
          <button className="btn btn-success rounded-pill py-2 w-100">Registered</button>
          {this.displayUnregisterOrNot(obj)}
          <button onClick={() => showModalSubmit(obj)} className="btn btn-primary rounded-pill single-event-details mt-5 text-white py-2 w-100"><strong>SUBMIT INFO</strong></button>
          <button onClick={() => this.checkLogin("/invite/" + this.state.event.code)} className="btn btn-warning rounded-pill single-event-details mt-3 text-white py-2 w-100"><strong>JOIN TEAM</strong></button>
        </>
      );
    }
    if(obj.start_date == null || obj.end_date == null  || obj.start_date == undefined ||  obj.end_date == undefined ){
      return (
        <Button  className="black-border" color="secondary">Coming Soon</Button>
      )
    }
    else if (startDate >= today) {
      return (
        <>
          <button onClick={() => showModalEventOne(obj)} className="btn btn-danger rounded-pill single-event-details text-white py-2 w-100"><strong>REGISTER</strong></button>
          <button onClick={() => this.checkLogin("/invite/" + this.state.event.code)} className="btn btn-warning rounded-pill single-event-details mt-3 text-white py-2 w-100"><strong>JOIN TEAM</strong></button>
        </>
      );
    }
    else if (startDate < today && endDate > today) {
      return (
        <>
        <button onClick={() => showModalEventOne(obj)} className="btn btn-warning single-event-details text-white rounded-pill py-2 w-100"><strong>JOIN NOW</strong></button>
        <button onClick={() => this.checkLogin("/invite/" + this.state.event.code)} className="btn btn-warning rounded-pill single-event-details mt-3 text-white py-2 w-100"><strong>JOIN TEAM</strong></button>
        </>
      );
    }
    else {
      return (
        <button className="btn btn-secondary single-event-details text-white rounded-pill py-2 w-100 desktop-only"><strong>OVER</strong></button>
      );
    }
  }

  dateToString = (num1, num2) => {
    return formatDate(num1) + "\t To \t" + formatDate(num2);
  };

  displayInviteCodeOrNot = () => {
    var tagline = this.state.event.tagline;
    if(tagline == "tag00" || tagline == "tag10"){
      return (<div></div>)
    }
    else{
      return (
        <>
        <h1 className="mt-3"><strong>Invite Code</strong></h1>
        <div className="passcode w-100" id="room_passcode" onClick={this.copyClipboard}>
          {this.state.eventCode}
        </div>
        <div className="copy-display mx-3" id="copy_info" onClick={this.copyClipboard}>
          Click to copy code
        </div>        
        </>
      );
    }
  }

  displayTeamNameOrNot(){
    var tagline = this.state.event.tagline;
    if(tagline == "tag00" || tagline == "tag01"){
      return (<div></div>)
    }
    else{
      return (
      <>
      <div>
        <h1 className="mt-3"><strong>Team {this.state.teamDetails.name}</strong></h1>
        <ul className="single-event-details text-primary">
          {this.state.teamDetails.members.map((obj, ind) =>
            <li key={ind}>
              {obj}
            </li>
          )}
        </ul>
      </div>      
        </>
      );
    }    
  }

  checkIfRegistered = () => {
    var flag = 1;
    this.state.myEvents.map((obj) => {
      if (obj.code == this.props.match.params["0"]) {
        flag = 0;
      }
    })
    if (flag) {
      return (
        <div>

        </div>
      )
    }
    return (
      <div>
        {this.displayTeamNameOrNot()}
        {this.displayInviteCodeOrNot()}
      </div>
    )
  }

  // var url = "../images/" + this.props.match.params["0"] + ".png";

  checkLogin = (string) => {
    if (localStorage.getItem("user") == null || localStorage.getItem("user") == undefined || !JSON.parse(localStorage.getItem("user"))["authenticated"]) {
      localStorage.setItem("prevURL", window.location.href);
      window.location.href = "/login";
      // localStorage.setItem("prevURL",window.location.href);
    }
    else {
      checkExpired();
      window.location.href = string;
    }
  }

  afterRegistration(string){
    var flag = 1;
    this.state.myEvents.map((obj) => {
      if (obj.code == this.props.match.params["0"]) {
        flag = 0;
      }
    })
    if (flag) {
      return string;
    }      
    if(extraInfo.default[this.props.match.params["0"]] == undefined){
      return string;
    }
    return string + "\n \n \n" + extraInfo.default[this.props.match.params["0"]];
  }

  displayPrizesOrNot = () => {
    var string = this.state.event.prizes;
    if(string == null || string == ""){
      return (<div></div>)
    }
    else{
      return (
        <>
          <h1 className="mt-3"><strong>Prizes</strong></h1>
          {checkUndef(this.state.event.prizes).length > 1 ?
            <ol className="single-event-details text-primary">
              {checkUndef(this.state.event.prizes).map((obj, ind) =>
                <li key={ind}>
                  {obj}
                </li>
              )}
            </ol>
            :
            <div className="single-event-details text-primary bold">
              {check42(checkUndef(this.state.event.prizes)[0])}
            </div>
          }        
        </>
      );
    }
  }

  displayCustomInfoOrNot = () => {
    var string = this.state.teamDetails.custom_info;
    if(string == undefined || string == null || string == ""){
      return (<div></div>)
    }
    else{
      return (
        <>
          <h1 className="mt-3"><strong>Custom Info</strong></h1>
          <h3 className=" mt-2"><strong>
            {this.state.event == undefined ? "" : this.state.teamDetails.custom_info}
          </strong>
          </h3>              
        </>
      );
    }    
  }

  displayTeamSizeLimitOrNot = () => {
    var string = this.state.event.tagline;
    if(string == "tag10" || string == "tag00"){
      return (<div></div>)
    }
    else{
      return (
        <>
          <h1 className="mt-3"><strong>Team Size Limit:</strong></h1>
          <div className="single-event-details text-primary" >
          {this.state.event == undefined ? "" : this.state.event.team_size_limit}
          </div>
        </>
      );
    }    
  }

  renderCalenderOrNot(){
    if(this.state.event.start_date == null || this.state.event.end_date == null  || this.state.event.start_date == undefined ||  this.state.event.end_date == undefined ){
      return (
        <>
          <div class="d-flex justify-content-center">
          <div class="calendar mx-2" style={{backgroundColor: "#6ef56e"}}>
            <p id="monthName">Start</p>
            <p id="dayNumber">--</p>
            <p id="year">2021</p>
            <p id="dayName">--</p>
          </div>

          <div class="calendar mx-2" style={{backgroundColor: "#f56e6e"}}>
            <p id="monthName">End</p>
            <p id="dayNumber">--</p>
            <p id="year">2021</p>
            <p id="dayName">--</p>
          </div>
        </div>
      </>
      )
    }
    else{
      return(
        <>
          <div class="d-flex justify-content-center">
          <div class="calendar mx-2" style={{backgroundColor: "#6ef56e"}}>
            <p id="monthName">Start</p>
            <p id="dayNumber">{formatDate2(this.state.event.start_date).slice(0, 4)}</p>
            <p id="year">2021</p>
            <p id="dayName">{formatDate3(this.state.event.start_date)}</p>
          </div>

          <div class="calendar mx-2" style={{backgroundColor: "#f56e6e"}}>
            <p id="monthName">End</p>
            <p id="dayNumber">{formatDate2(this.state.event.end_date)}</p>
            <p id="year">2021</p>
            <p id="dayName">{formatDate3(this.state.event.end_date)}</p>
          </div>
        </div>
      </>        
      )
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{marginTop: "6rem", backgroundColor: "white", color: "black"}}>
        <br />


        <textarea id="roomcode_helper"></textarea>
        <div className="banner" id={this.props.match.params["0"] + "myid"}>
        </div>
        <div className="row mt-5 mx-2">
          <div className="col-md-8 single-event-contain">
            <h1 className=""><strong>{this.state.event.name}  <Chip label={checkSpecific(this.state.event)} /></strong></h1>
            <p className="mt-3">{this.afterRegistration(this.state.event.description)}</p>

            {this.renderCalenderOrNot()}

          </div>
          <div className="col-md-4">
            <div className="round-card px-5 py-5 my-4">
              <div className="text-center">
                {this.checkLiveOrNot(this.state.event)}
              </div>
              {this.displayPrizesOrNot()}
              {this.checkIfRegistered()}
              {this.displayTeamSizeLimitOrNot()}
              {this.displayCustomInfoOrNot()}
              <h1 className="mt-3"><strong>Organizers</strong></h1>
              <h3 className=" mt-2"><strong>
                {this.state.event == undefined ? "" : this.state.event.organizer_clubs}
              </strong>
              </h3>
              <ul className="single-event-details text-primary">
                {checkUndef(this.state.event.organizer_names).map((obj, ind) =>
                  <li key={ind}>
                    {obj}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SingleEvent;
