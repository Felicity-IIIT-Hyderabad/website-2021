import { useState } from "react";
import "./OurTeam.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
        setSelectedTeam(teamName);
        var elmnt = document.getElementById(teamName);
        elmnt.scrollIntoView();
        elmnt.scrollTo(0, 100);
    };

    const changeTeamToScroll = () => {
        var elmnt = document.getElementById("corporate");
        if(isInViewport(elmnt)){
            setSelectedTeam("corporate");
        }
        elmnt = document.getElementById("marketing");
        if(isInViewport(elmnt)){
            setSelectedTeam("marketing");
        }
        elmnt = document.getElementById("design");
        if(isInViewport(elmnt)){
            setSelectedTeam("design");
        }
        elmnt = document.getElementById("web");
        if(isInViewport(elmnt)){
            setSelectedTeam("web");
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
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6 desktop-only left-display">
                        <div className="font-weight-bold details-header my-5 ml-3 event-heading text-white text-left">MEET THE TEAM</div>

                        <div className={selectedTeam==="overall" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("overall")}> {selectedTeam==="overall" ? <FontAwesomeIcon icon={faChevronRight} /> : "" } OVERALL</div>
                        <div className={selectedTeam==="events" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("events")}>  {selectedTeam==="events" ? <FontAwesomeIcon icon={faChevronRight} /> : "" } EVENTS</div>
                        <div className={selectedTeam==="web" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("web")}>  {selectedTeam==="web" ? <FontAwesomeIcon icon={faChevronRight} /> : "" } WEB</div>
                        <div className={selectedTeam=="design" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("design")}>  {selectedTeam==="design" ? <FontAwesomeIcon icon={faChevronRight} /> : "" } DESIGN</div>
                        <div className={selectedTeam==="marketing" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("marketing")}>  {selectedTeam==="marketing" ? <FontAwesomeIcon icon={faChevronRight} /> : "" } MARKETING</div>
                        <div className={selectedTeam==="corporate" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("corporate")}>  {selectedTeam==="corporate" ? <FontAwesomeIcon icon={faChevronRight} /> : "" } CORPORATE</div>

                    </div>
                    <div className="col-md-6 right-display" onScroll={() => changeTeamToScroll()}>
                        <div id="overall" className={selectedTeam==="overall" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Overall</div>
                        <div className="text-center">
                            <div className="main-featured">
                                <img className="img-fluid mt-5" src="https://scontent.fpat6-1.fna.fbcdn.net/v/t1.0-9/147338451_3705782272850436_6748860775603699513_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=o-kSh630YHMAX-kApmh&_nc_ht=scontent.fpat6-1.fna&oh=f1796c37e4ee4e26fa19732888b08dd8&oe=60518214" alt="Thumb" />
                                <h3 className="text-white my-3">Shivaan Sehgal</h3>
                                <div className="social-links-main">
                                    <span className="social-icon mx-2"><a href="https://www.linkedin.com/in/shivaan-sehgal-6864991aa/"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                    <span className="social-icon mx-2"><a href="https://www.facebook.com/sehgal.shivan"><FontAwesomeIcon icon={faFacebook} /></a></span>
                                </div>
                            </div>
                        </div>
                        <div id="events" className={selectedTeam==="events" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Events</div>
                        <div className="text-center">
                            {teamMembers.default["events"].map((teamMember, idx) => (
                                teamMember["main"] ? 
                                    <div className="featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-feat">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div> : ""
                                
                            ))}
                            {teamMembers.default["events"].map((teamMember, idx) => (
                                teamMember["main"] ? "" : 
                                    <div className="non-featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-non">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>
                        <div id="web" className={selectedTeam==="web" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Web</div>
                        <div className="text-center">
                            {teamMembers.default["web"].map((teamMember, idx) => (
                                teamMember["main"] ? 
                                    <div className="featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-feat">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div> : ""
                                
                            ))}
                            {teamMembers.default["events"].map((teamMember, idx) => (
                                teamMember["main"] ? "" : 
                                    <div className="non-featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-non">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>   
                        <div id="design" className={selectedTeam==="design" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Design</div>
                        <div className="text-center">
                            {teamMembers.default["design"].map((teamMember, idx) => (
                                teamMember["main"] ? 
                                    <div className="featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-feat">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div> : ""
                                
                            ))}
                            {teamMembers.default["events"].map((teamMember, idx) => (
                                teamMember["main"] ? "" : 
                                    <div className="non-featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-non">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>
                        <div id="marketing" className={selectedTeam==="marketing" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Marketing</div>
                        <div className="text-center">
                            {teamMembers.default["marketing"].map((teamMember, idx) => (
                                teamMember["main"] ? 
                                    <div className="featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-feat">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div> : ""
                                
                            ))}
                            {teamMembers.default["events"].map((teamMember, idx) => (
                                teamMember["main"] ? "" : 
                                    <div className="non-featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-non">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>
                        <div id="corporate" className={selectedTeam==="corporate" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Corporate</div>
                        <div className="text-center">
                            {teamMembers.default["corporate"].map((teamMember, idx) => (
                                teamMember["main"] ? 
                                    <div className="featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-feat">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div> : ""
                                
                            ))}
                            {teamMembers.default["events"].map((teamMember, idx) => (
                                teamMember["main"] ? "" : 
                                    <div className="non-featured d-inline-block mx-4">
                                        <img className="img-fluid mt-5" src={teamMember["image"]} alt="Thumb" />
                                        <h3 className="text-white my-3">{teamMember["name"]}</h3>
                                        <div className="social-links-non">
                                            <span className="social-icon mx-2"><a href={prepareFBLink(teamMember["linkedin"])}><FontAwesomeIcon icon={faLinkedin} /></a></span>
                                            <span className="social-icon mx-2"><a href={prepareInLink(teamMember["facebook"])}><FontAwesomeIcon icon={faFacebook} /></a></span>
                                        </div>
                                    </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
