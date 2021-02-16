import { useState } from "react";
import "./Team.css";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Team = () => {

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

    return (
        <div>
            <Navbar/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6 desktop-only left-display">
                        <div className="font-weight-bold infopage-title my-5 ml-4 event-heading text-white text-left">MEET THE TEAM</div>

                        <div className={selectedTeam==="overall" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("overall")}> {selectedTeam=="overall" ? <FontAwesomeIcon icon={faAtom} /> : "" } OVERALL</div>
                        <div className={selectedTeam==="events" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("events")}>  {selectedTeam=="events" ? <FontAwesomeIcon icon={faAtom} /> : "" } EVENTS</div>
                        <div className={selectedTeam==="web" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("web")}>  {selectedTeam=="web" ? <FontAwesomeIcon icon={faAtom} /> : "" } WEB</div>
                        <div className={selectedTeam=="design" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("design")}>  {selectedTeam=="design" ? <FontAwesomeIcon icon={faAtom} /> : "" } DESIGN</div>
                        <div className={selectedTeam==="marketing" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("marketing")}>  {selectedTeam=="marketing" ? <FontAwesomeIcon icon={faAtom} /> : "" } MARKETING</div>
                        <div className={selectedTeam==="corporate" ? "font-weight-bold ml-5 my-3 text-left text-white left-category" : "font-weight-bold ml-5 my-3 text-left text-secondary left-category"} style={{ fontSize: "2rem" }} onClick={() => changeTeam("corporate")}>  {selectedTeam=="corporate" ? <FontAwesomeIcon icon={faAtom} /> : "" } CORPORATE</div>

                    </div>
                    <div className="col-md-6 right-display" onScroll={() => changeTeamToScroll()}>
                        <div id="overall" className={selectedTeam==="overall" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Overall</div>
                        <div className="text-center">
                            <div className="main-featured">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Shivaan Sehgal</h3>
                                <div className="social-links-main">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                        </div>
                        <div id="events" className={selectedTeam==="events" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Events</div>
                        <div className="text-center">
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                        </div>
                        <div id="web" className={selectedTeam==="web" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Web</div>
                        <div className="text-center">
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                        </div>
                        <div id="design" className={selectedTeam==="design" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Design</div>
                        <div className="text-center">
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                        </div>
                        <div id="marketing" className={selectedTeam=="marketing" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Marketing</div>
                        <div className="text-center">
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                        </div>
                        <div id="corporate" className={selectedTeam==="corporate" ? "font-weight-bold details-header ml-5 mr-3 text-left text-white right-category" : "font-weight-bold details-header ml-5 mr-3 text-left text-secondary right-category" } style={{ fontSize: "4rem" }}>Corporate</div>
                        <div className="text-center">
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-feat">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                            <div className="non-featured d-inline-block mx-4">
                                <img className="img-fluid mt-5" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb" />
                                <h3 className="text-white my-3">Sample Name</h3>
                                <div className="social-links-non">
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    <span className="social-icon mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
