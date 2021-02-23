import React from "react";
import axios from "axios";
import "./Invite.css";
import { eventsBaseApi } from "../api";
import Swal from "sweetalert2";

class InvitePage extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        code:"",
        eventId:""
      }
    }

    componentDidMount = () => {
      var eventId = this.props.match.params["0"];
      console.log(eventId);
      this.setState({
        eventId: eventId
      })
    }

    postTeam = () => {
      axios.post(eventsBaseApi + "/" + this.state.eventId + "/register?team_code=" + this.state.code,{},{
        headers:{
          Authorization:JSON.parse(localStorage["user"])["token"]
        }
      }).then((response)=>{
          Swal.fire({title: "Success",
          icon: 'success',
          footer: "Joined Team !",
          customClass: {
            title: 'text-success',
            content: 'text-white',
            confirmButton: 'bg-success',
          },
          background: `rgba(0,0,0,1)`
        }).then(()=>
          {
            window.location.href="/event/" + this.state.eventId;
          }
        );
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

    render(){
    return (
        <>
          <div className="invite-container pt-5">
              <div class="d-flex justify-content-center">
                <div className="frosted-card">
                  <h1>Please Enter Invite Code:</h1>
                  <input type="text" className="invite-input p-2 w-50" value={this.state.code} onChange={(event) => this.changeCode(event) } /> <br/><br/><br/>
                  <button className="btn btn-info px-5 py-2 join-button" onClick={() => this.postTeam()}> JOIN TEAM </button>
                </div>
              </div>
          </div> 
        </>
    );
    }
};

export default InvitePage;
