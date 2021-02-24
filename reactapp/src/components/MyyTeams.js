import React from "react";
import  {Table} from "reactstrap"
import axios from "axios";
import "./MyTeam.css";
import { eventsBaseApi } from "../api";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";

class MyTeams extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        code:"",
        eventId:"",
        teams:[]
      }
    }

    componentDidMount = () => {

    }

    postTeam = () => {
      if( localStorage.getItem("user") == null || localStorage.getItem("user") == undefined ||  !JSON.parse(localStorage.getItem("user"))["authenticated"]){
        localStorage.setItem("prevURL",window.location.href);
        window.location.href="/login";            
        // localStorage.setItem("prevURL",window.location.href);
    }      
      if(this.state.eventId != "" && this.state.code != ""){
      axios.get(eventsBaseApi + "/" + this.state.eventId + "/teams",{
        headers:{
          Authorization:this.state.code
        }
      }).then((response)=>{
        Swal.fire({title: "Teams Fetched!",
        icon: 'success',
        text: "Scroll down",
        footer: "At bottom.",
        customClass: {
          title: 'text-success',
          content: 'text-white',
          confirmButton: 'bg-danger',
        },
        background: `rgba(0,0,0,1)`
      });
      console.log(this.prepareArray(response.data));
        this.setState({
          teams:response.data
        })
      }).catch((error) => 
        {
          Swal.fire({title: "Oops! Error",
                  icon: 'error',
                  text: error.response.message,
                  footer: "The above error popped up while joining the team.",
                  customClass: {
                    title: 'text-danger',
                    content: 'text-white',
                    confirmButton: 'bg-danger',
                  },
                  background: `rgba(0,0,0,1)`
                });
        }      
      )
      }
      else{
              Swal.fire({title: "Oops! Error",
              icon: 'error',
              text: "Enter na",
              footer: "Incomplete fields.",
              customClass: {
                title: 'text-danger',
                content: 'text-white',
                confirmButton: 'bg-danger',
              },
              background: `rgba(0,0,0,1)`
            });        
      }
    }

    changeCode = (event) => {
      this.setState({
        code: event.target.value
      })
    }

    changeEventId = (event) => {
      this.setState({
        eventId: event.target.value
      })
    }

    getFileName(){
      var date = new Date();
      return this.state.eventId + "_" + (date.getTime()).toString() + ".csv";
    }

    checkTeamsSize(){
      if(this.state.teams.length > 0){
        return(
          <div className="text-center">
          <button className="btn btn-success rounded-pill py-2 w-50 mb-5">
          <CSVLink className="btn btn btn-success rounded-pill py-2 w-100 btn-round btn-primary text-center"  filename={this.getFileName()} data={this.prepareArray(this.state.teams)["array"]} headers={this.prepareArray(this.state.teams)["headers"]}>
          Download data
          </CSVLink>
          </button>
          </div>
        );
      }
      else{
        return(
          <div className="text-center">
          <button className="btn btn-success rounded-pill py-2 w-50 mb-5">
          <CSVLink className="btn btn btn-success rounded-pill py-2 w-100 btn-round btn-primary text-center" data={this.state.teams} separator={";"}>
          Download data
          </CSVLink>
          </button>
          </div>
        );
      }
    }

    prepareArray(array){
      var headers = [];
      var maxi = -1;
      for (let ind = 0; ind < array.length; ind++) {
        var tems  = array[ind]["users"];
        if(tems.length > maxi){
          maxi = tems.length;
        }
      }
      headers.push({
        label: "Team Name",
        key: "team_name"
      }) 
      for (let ind = 0; ind < maxi; ind++) {
        headers.push({
          label: "Member " + (ind + 1).toString() + " Name",
          key: "details.name" + (ind + 1).toString()
        })
        headers.push({
          label: "Member " + (ind + 1).toString() + " Email",
          key: "details.email" + (ind + 1).toString()
        })        
      }
      var data = [];
      for (let ind = 0; ind < array.length; ind++) {
        var dic = {
          "team_name": array[ind]["name"],
          "details":{}
        }
        for (let indd = 0; indd < array[ind]["users"].length; indd++) {
          dic["details"]["name" + (indd + 1).toString()] = array[ind]["users"][indd]["name"];
          dic["details"]["email" + (indd + 1).toString()] = array[ind]["users"][indd]["email"];
        }
        data.push(dic);
      }
      return {
        "headers":headers,
        "array":data
      }
    }

    render(){
    return (
        <>
          <div className="invite-container pt-5">
              <div className="d-flex justify-content-center mb-5">
                <div id="myteamsss" className="frosted-card mb-5" style={{ paddingBottom: "15rem" }}>
                  <h1>Please Enter Event Code:</h1>
                  <input type="text" className="invite-input p-2 w-50" value={this.state.eventId} onChange={(event) => this.changeEventId(event) } /> <br/><br/><br/>
                  <h1>Please Enter Secret Key:</h1>
                  <input type="text" className="invite-input p-2 w-50" value={this.state.code} onChange={(event) => this.changeCode(event) } /> <br/><br/><br/>
                  <button className="btn btn-info px-5 py-2 join-button" onClick={() => this.postTeam()}> SHOW TEAMS </button>                  
                </div>
              </div>
              <div className="mt-5 pt-5" style={{ paddingTop: "15rem" ,color: "white" }}>
              {this.checkTeamsSize()}
              <Table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Team Name</th>
                    <th>Users</th>                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map((obj,ind)=>
                    <tr>
                      <th scope="row">{ind + 1}</th>
                      <td>{obj.name}</td>
                      <td>{obj.users.map((obj2)=>
                          <div>{obj2.name}</div>
                      )}</td>
                    </tr>
                  )}
                </tbody>
              </Table>
              </div>
          </div> 
        </>
    );
    }
};

export default MyTeams;
