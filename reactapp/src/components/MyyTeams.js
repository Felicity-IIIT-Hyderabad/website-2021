import React from "react";
import  {Table} from "reactstrap"
import axios from "axios";
import "./MyTeam.css";
import { eventsBaseApi } from "../api";
import Swal from "sweetalert2";

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
      axios.get(eventsBaseApi + "/" + this.state.eventId + "/teams",{
        headers:{
          Authorization:this.state.code
        }
      }).then((response)=>{
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
                  <button className="btn btn-info px-5 py-2 join-button" onClick={() => this.postTeam()}> JOIN TEAM </button>                  
                </div>
              </div>
              <div className="mt-5 pt-5" style={{ paddingTop: "15rem" ,color: "white" }}>
              <Table>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Team Name</th>
                    <th>Users</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.teams.map((obj)=>
                    <tr>
                      <th scope="row">1</th>
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
