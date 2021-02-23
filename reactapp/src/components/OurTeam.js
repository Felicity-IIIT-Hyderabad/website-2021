import { useState } from "react";
import "./OurTeam.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

import * as teamMembers from "../sample-data/teams.json";

const OurTeam = () => {

    const [selectedTeam, setSelectedTeam] = useState("overall");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const changeTeam = (teamName) => {
        setSelectedTeam(teamName.obj);
        var elmnt = document.getElementById(teamName.obj);
        elmnt.scrollIntoView();
        var headerOffset = 80;
        var elementPosition = elmnt.offsetTop;
        var offsetPosition = elementPosition - headerOffset;
        
        elmnt = document.getElementById("scroll-container");
        elmnt.scrollTop = offsetPosition;
    };

    const changeTeamToScroll = () => {
        var elmnt = document.getElementById("technical");
        if(isInViewport(elmnt)){
            setSelectedTeam("technical");
        }        
        elmnt = document.getElementById("design");
        if(isInViewport(elmnt)){
            setSelectedTeam("design");
        }
        elmnt = document.getElementById("corporate");
        if(isInViewport(elmnt)){
            setSelectedTeam("corporate");
        }
        elmnt = document.getElementById("marketing");
        if(isInViewport(elmnt)){
            setSelectedTeam("marketing");
        }     
        elmnt = document.getElementById("events");
        if(isInViewport(elmnt)){
            setSelectedTeam("events");
        }
        elmnt = document.getElementById("overall");
        if(isInViewport(elmnt)){
            setSelectedTeam("overall");
        }        
    };

    function prepareInLink(link){
        return "https://www.facebook.com/" + link.toString();
    }

    function prepareFBLink(link){
        return "https://www.linkedin.com/in/" + link.toString();
    }


    return (
        <div>
            <div className="container-fluid mt-5 no-scroll">
                <div className="row">

                    {/* {console.log(teamMembers.default)} */}
                    <div className="col-md-12 right-display-team" onScroll={() => changeTeamToScroll()} id="scroll-container">                        
                        {/* <div id="overall" className={selectedTeam==="overall" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Overall</div>
                        <div className="text-center">
                            <div className="main-featured">
                                <img className="img-fluid mt-5" src="https://scontent.fpat6-1.fna.fbcdn.net/v/t1.0-9/147338451_3705782272850436_6748860775603699513_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=o-kSh630YHMAX-kApmh&_nc_ht=scontent.fpat6-1.fna&oh=f1796c37e4ee4e26fa19732888b08dd8&oe=60518214" alt="Thumb" />
                                <h3 className="text-white my-3">Shivaan Sehgal</h3>
                                <div className="social-links-main">
                                    <span className="social-icon mx-2"><a href="https://www.linkedin.com/in/shivaan-sehgal-6864991aa/"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                    <span className="social-icon mx-2"><a href="https://www.facebook.com/sehgal.shivan"><FontAwesomeIcon icon={faFacebook} /></a></span>
                                </div>
                            </div>
                        </div> */}
                        {Object.keys(teamMembers.default).map((obj,ind)=>
                            <>
                                <div id={ obj } className={selectedTeam==={ obj } ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category text-center" } style={{ fontSize: "4rem" }}>{ obj.toUpperCase() }</div>                            
                                {/* <div id={ obj } className={selectedTeam==={ obj } ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "2rem" }}>{ obj.toUpperCase() }</div> */}
                                <div className="text-center">
                                    {teamMembers.default[obj].map((teamMember, idx) => (
                                        teamMember["main"] ? 
                                            <div className="main-featured d-inline-block mx-5">
                                                <img className="img-fluid mt-5" src={"/teams/" + teamMember["image"]} alt="Thumb" />
                                                <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                                <div className="social-links-feat">
                                                    <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                                    <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                                </div>
                                            </div> : ""
                                        
                                    ))}                                 
                                </div>
                            </> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
