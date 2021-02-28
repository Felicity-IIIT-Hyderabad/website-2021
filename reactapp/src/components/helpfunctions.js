import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import {eventsBaseApi, eventsRegisteredApi, eventsRegisterApi, eventsApi} from "../api/";
import { logoutUser } from "../actions/login";

export function fireSuccess(doFunc){
    Swal.fire({title: "Success",
    icon: 'success',
    footer: "Joined Team !",
    customClass: {
      title: 'text-success',
      content: 'text-white',
      confirmButton: 'bg-success',
    },
    background: `#222831`
  }).then(()=>
    {
      doFunc();
    }
  );
}

export function fireFailure(error){
    console.log(error.response);
    Swal.fire({title: "Oops! Error",
    icon: 'error',
    text: error.response.data.message,
    footer: "Error message",
    customClass: {
      title: 'text-danger',
      content: 'text-white',
      confirmButton: 'bg-danger',
    },
    background: `#222831`
  });
}

export function checkUndef(string) {
    if (string == undefined) {
      return [];
    } else {
      return string.split(",");
    }
  }
  
  export function addSuperScript(number) {
    if ((number % 10 >= 4) || (number % 10 == 0)) {
      return "th"
    }
    else if (number % 10 == 3) {
      return "rd"
    }
    else if (number % 10 == 2) {
      return "nd"
    }
    else if (number % 10 == 1) {
      return "st"
    }
  }
  
  export function amOrPM(hours) {
    if (hours > 12) {
      return "\t "
    }
    else {
      return "\t "
    }
  }
  
  export function formatDate(num1) {
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
    var formattedTime = day + addSuperScript(day) + "\t" + month[mon] + "\t" + hours + ":" + minutes.substr(-2) + amOrPM(hours);
    return formattedTime;
  }
  
  export function formatDate2(num1) {
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
    var formattedTime = day + "/" + (mon + 1);// addSuperScript(day) +  "\t" + month[mon] + "\t" +  hours + ":" + minutes.substr(-2) + amOrPM(hours);
    return formattedTime;
  }

  export function formatDate3(num1) {
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
    var formattedTime = hours + ":" + minutes;// addSuperScript(day) +  "\t" + month[mon] + "\t" +  hours + ":" + minutes.substr(-2) + amOrPM(hours);
    return formattedTime;
  }  

  export function checkExpired(){
    if(localStorage.getItem("user") != null){
      var ifAuth = JSON.parse(localStorage.getItem("user"));
      if(ifAuth["authenticated"]){
        let unix_timestamp = parseInt(ifAuth["tokenParsed"]["exp"]);
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        var todayDate = new Date();
        if(date < todayDate){
          // log him out please
          logoutUser();
          localStorage.setItem("prevURL",window.location.href);
          window.location.href="/login";
        }
      }
    }
  }

  export const showModalEventOne = async (event) => {
    if (event.registration_link != "") {
      window.open(event.registration_link);
    }
    else {
      if (localStorage.getItem("user") == null || localStorage.getItem("user") == undefined || !JSON.parse(localStorage.getItem("user"))["authenticated"]) {
        localStorage.setItem("prevURL", window.location.href);
        window.location.href = "/login";
      }
      checkExpired();
      if(event["tagline"] == "tag00" || event["tagline"] == "tag01"){
        // show the without text box vala modal
        Swal.fire({
          title: event["name"],
          text: event["description"],
          footer: "Deadline:" + formatDate(event["end_date"]),
          customClass: {
            title: " error-message",
            content: "error-message",
            confirmButton: "game-button bg-danger",
            footer: "text-danger error-message"
          },
          width: "64em",
          background: "white",
          confirmButtonText: "Register",
          showCloseButton: true,
          showCancelButton: true,
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post(eventsBaseApi + "/" + event["code"] + "/register", {}, {
              headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res) => {
              window.location.reload();
            }).catch((error) =>
              {console.log(error);fireFailure(error);}
            );
          }
        });        
      }
      else{
      const {value: text} = await Swal.fire({
        title: event["name"],
        input: 'textarea',
        html: event["description"] + displayCdhf(event),
        inputPlaceholder: 'Should not exceed 32 characters...',
        inputAttributes: {
          'aria-label': 'Type your message here',
          'height': '10'
        },
        customClass: {
          title: " error-message",
          content: "error-message",
          confirmButton: "game-button bg-danger",
          image: "error-image-swal",
          footer: "text-danger error-message"
        },
        width: "40vw",
        background: "white",
        confirmButtonText: "Register Now",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: "Not Now"
      })
      if (true) {
        if (text == "" && text != undefined) {
          axios.post(eventsBaseApi + "/" + event["code"] + "/register", {}, {
            headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")).token}
          }).then((res) => {
            window.location.reload();
          }).catch((error) =>
            {console.log(error);}
          );
        }
        else {
          if (text != undefined) {
            axios.post(eventsBaseApi + "/" + event["code"] + "/register?name=" + text, {}, {
              headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res) => {
              window.location.reload();
            }).catch((error) =>
              {console.log(error);fireFailure(error);}
            );
          }
        }
      }
    }
    }
  };
  
  export const showModalSubmit = async (event) => {
    if (event.registration_link != "") {
      window.open(event.registration_link);
    }
    else {
      if (localStorage.getItem("user") == null || localStorage.getItem("user") == undefined || !JSON.parse(localStorage.getItem("user"))["authenticated"]) {
        localStorage.setItem("prevURL", window.location.href);
        window.location.href = "/login";
        // localStorage.setItem("prevURL",window.location.href);
      }
      checkExpired();
      const {value: text} = await Swal.fire({
        title: event["name"],
        input: 'textarea',
        inputLabel: "Enter your information below",
        inputPlaceholder: 'Should not exceed 100 characters...',
        inputAttributes: {
          'aria-label': 'Type your message here',
          'height': '10'
        },
        customClass: {
          title: " error-message",
          content: "error-message",
          confirmButton: "game-button bg-danger",
          image: "error-image-swal",
          footer: "text-danger error-message"
        },
        width: "40vw",
        background: "white",
        confirmButtonText: "Submit Info",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: "Not Now"
      })
      if (true) {
        if (text == "" && text == undefined) {
        fireFailure({
          "data":{
            "response":{
                "message": "Bhai kuch daal to sahi"
            }
          }
        })
        }
        else {
          if (text != undefined) {
            axios.post(eventsBaseApi + "/" + event["code"] + "/change_team_custom?newcustom=" + text, {}, {
              headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")).token}
            }).then((res) => {
              window.location.reload();
            }).catch((error) =>
              {fireFailure(error)}
            );
          }
        }
      }
    }
  };

  export const showModalEventUnregister = (event) => {
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
        axios.post(eventsBaseApi + "/" + event["code"] + "/exitteam", {}, {
          headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")).token : ""}
        }).then((res) => {
          window.location.reload();
        }).catch((error) =>
          {fireFailure(error);}
        );
      }
    });
  };
  

  export const dateToString = (num1, num2) => {
    if(num1 == null || num2 == null){
        return "Coming Soon!";
    }
    return formatDate(num1) + "\t To \t" + formatDate(num2);
};

export function displayCdhf(event){
  var string = "\n Please enter your codechef username below, make sure that it is valid";
  if(event.code == "decode" || event == "codec"){
    return string.bold();
  }
  else{
    return(
      "\n Enter your team name below. Leave blank in case team name is not applicable or if in doubt."
    );
  }
}

 export const showModalEvent = async (event) => {
    if(event.registration_link != ""){
        window.open(event.registration_link);
    }
    else{
        checkExpired(); 
        if(event["tagline"] == "tag00" || event["tagline"] == "tag01"){
          // show the without text box vala modal
          Swal.fire({
            title: event["name"],
            html: event["description"],
            footer: "Deadline:" + formatDate(event["end_date"]),
            customClass: {
              title: " error-message",
              content: "error-message",
              confirmButton: "game-button bg-danger",
              footer: "text-danger error-message"
            },
            width: "64em",
            background: "white",
            confirmButtonText: "Register",
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              axios.post(eventsBaseApi + "/" + event["code"] + "/register", {}, {
                headers: {"Authorization": JSON.parse(window.localStorage.getItem("user")).token}
              }).then((res) => {
                window.location.reload();
              }).catch((error) =>
              {console.log(error);}
              );
            }
          });            
        } 
        else{      
        const { value: text } = await Swal.fire({
            title:  event["name"],
            input: 'textarea',
            html: event["description"] + displayCdhf(event),
            inputPlaceholder: 'Should not exceed 32 characters...',
            inputAttributes: {
              'aria-label': 'Type your message here',
              'height': '10'
            },
            customClass: {
                title: " error-message",
                content: "error-message",
                confirmButton: "game-button bg-danger",
                image: "error-image-swal",
                footer: "text-danger error-message"
            },                
            width: "40vw",
            background: "white",
            confirmButtonText: "Register Now",
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText: "Not Now"           
        })
        if(true){
            if(text == "" && text != undefined){
                axios.post(eventsBaseApi + "/" + event["code"] + "/register",{},{
                    headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
                }).then((res)=>{
                    window.location.reload();
                }).catch((error)=>
                    {console.log(error);}
                );                
            }

            else{
                if (text != undefined) {
                    axios.post(eventsBaseApi + "/" + event["code"] + "/register?name=" + text,{},{
                        headers: {"Authorization":JSON.parse(window.localStorage.getItem("user")).token}
                    }).then((res)=>{
                        window.location.reload();
                    }).catch((error)=>
                        {console.log(error);fireFailure(error); }
                    );
                }
                }
        }   
      }
    } 
}

export function checkSpecific(obj){
    if(obj["non_iiith_allowed"]){
        return "Open to All";
    }
    else{
        return "IIIT Specific";
    }
}

export function check42(string){
    if(string == "42" || string == 42){
        return " To be Announced";
    }
    else if(string == "43" || string == 43){
      return "No Prizes";
    }
    else{
        return "\u20B9 " + string;
    }
} 

export function Clipboard_CopyToOkNa(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

export function compareFunc (a, b) {
  var reg = /-|:|T|\+/; //The regex on which matches the string should be split (any used delimiter) -> could also be written like /[.:T\+]/
  var parsed = [ //an array which holds the date parts for a and b
      a.start_date.split(reg), //Split the datestring by the regex to get an array like [Year,Month,Day,Hour,...]
      b.start_date.split(reg)
  ];
  var dates = [ //Create an array of dates for a and b
      new Date(parsed[0][0], parsed[0][1], parsed[0][2], parsed[0][3], parsed[0][4], parsed[0][5]),//Constructs an date of the above parsed parts (Year,Month...
      new Date(parsed[1][0], parsed[1][1], parsed[1][2], parsed[1][3], parsed[1][4], parsed[1][5])
  ];
  return dates[0] - dates[1]; //Returns the difference between the date (if b > a then a - b < 0)
};

export function fireInfo(string){
  Swal.fire({
  title: "Today's events",
  content:"aa",
  text:string,
  footer: "Join us live !",
  customClass: {
    title: 'text-success',
    content: 'text-black',
  },
  background: `white`,
}).then(()=>
  {
    console.log("hii");
  }
);
}