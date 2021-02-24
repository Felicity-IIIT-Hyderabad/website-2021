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
import { formatDate,formatDate2,check42, checkUndef, checkSpecific,checkExpired,fireSuccess,fireFailure, showModalEventOne, showModalSubmit, showModalEventUnregister } from "./helpfunctions";

import * as megaEventData from "../sample-data/mega-events.json";

import * as extraInfo from "../sample-data/extra-info.json";
import "./MegaEventPage.css";

//#TODO: Add club logo to JSON data and change second image to {poster}
class MegaEventPage extends React.Component {

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
        "teamInfo": ""
      }
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

  getEvents(){
    axios.get(eventsApi).then(async (response)=>{

        var cultEventsData = this.sortDateWise(response.data).filter((obj)=> obj.tagline == "tag00");

        this.setState({
            events: response.data,
            cultEvents: cultEventsData
        });
        // cultEventsData.map((obj)=>
        // {
        //     console.log(obj);
        //     document.getElementById(obj.code + "myid").style.backgroundImage = 'url(/myEvents/' + obj.code + '.png)';
        // })
    });
}

  componentDidMount = () => {
    this.getEvents();
    {megaEventData.default.names.map((obj)=>
        document.getElementById(obj + "myid").style.backgroundImage = 'url(/myEvents/' + obj +  '.png)'
    )}    
    // document.getElementById("zkhanmyid").style.backgroundImage = 'url(/myEvents/zkhan.png)';
    // document.getElementById("aguptamyid").style.backgroundImage = 'url(/myEvents/agupta.png)';
  }


  render() {
    return (
      <div className="container-fluid" style={{marginTop: "6rem", backgroundColor: "black", color: "black"}}>
        <br />

        <Button className="btn event-button mt-4 event-pink" onClick={() => window.open("/events-mega")} style={{ width:"100%" }}> VIEW TIMELINE </Button><br/>
        <textarea id="roomcode_helper"></textarea>
        {megaEventData.default.names.map((obj)=>
            <div className="banner" id={obj + "myid"}></div>
        )}
        {/* <div className="banner" id={"zkhanmyid"}></div>
        <div className="banner" id={"aguptamyid"}></div>
        <div className="banner" id={"rduamyid"}></div>
        <div className="banner" id={"amolpmyid"}></div>
        <div className="banner" id={"stripshmyid"}></div>
        <div className="banner" id={"ydiarymyid"}></div >
        <div className="banner" id={"anandrmyid"}></div>
        <div className="banner" id={"vscsajjmyid"}></div>
        <div className="banner" id={"wbryantmyid"}></div>
        <div className="banner" id={"mjoshimyid"}></div>
        <div className="banner" id={"cpeddimyid"}></div> */}
      </div>
    );
  }
}

export default MegaEventPage;
