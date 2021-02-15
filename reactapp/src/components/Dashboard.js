import { useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Dashboard = () => {

    const [selectedDay, setSelectedDay] = useState("Day1");

    const changeDay = (dayNum) => {
        setSelectedDay("Day" + dayNum);
    };

    const leftScroll = (num) => {
        var carousel = document.getElementById("event"+num);
        carousel.scrollBy(-400, 0);
    };

    const rightScroll = (num) => {
        var carousel = document.getElementById("event"+num);
        carousel.scrollBy(400, 0);
    };

    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="header-carousel">
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={2000}>
                        <div className="header-carousel-item" id="item1">
                            <div className="header-carousel-title text-left">
                                Event One
                            </div>
                        </div>
                        <div className="header-carousel-item" id="item2">2
                            <div className="header-carousel-title text-left">
                                Event Two
                            </div>
                        </div>
                    </AutoplaySlider>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-3 left-display">
                        <h2 className="text-center my-3 text-white"><strong>Your Events</strong></h2>
                        <div className="event-days d-flex justify-content-center mt-4">
                            <div className={selectedDay === "Day1" ? "mx-2 text-center" : "mx-2 non-active-left text-center"} onClick={() => changeDay(1)}>DAY 1</div>
                            <div className={selectedDay === "Day2" ? "mx-2 text-center" : "mx-2 non-active-left text-center"} onClick={() => changeDay(2)}>DAY 2</div>
                            <div className={selectedDay === "Day3" ? "mx-2 text-center" : "mx-2 non-active-right text-center"} onClick={() => changeDay(3)}>DAY 3</div>
                        </div>
                        {selectedDay === "Day1" ?
                            <div className="events-listing mt-5">
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">8-9 AM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">8-9 AM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">8-9 AM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">8-9 AM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">8-9 AM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                            </div> : "" }
                        {selectedDay === "Day2" ?
                            <div className="events-listing mt-5">
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">12-01 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">12-01 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">12-01 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">12-01 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">12-01 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                            </div> : "" }
                        {selectedDay === "Day3" ?
                            <div className="events-listing mt-5">
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">4-5 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">4-5 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">4-5 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">4-5 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                                <div className="event-listing-item mt-3 mx-5">
                                    <div className="event-list-title ml-5">4-5 PM: IDK</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                    <div className="event-list-det">- Sample Text</div>
                                </div>
                            </div> : "" }
                    </div>
                    <div className="col-md-9 right-display">
                        <div className="event-type-title mt-3 mx-3">Upcoming - Day 1</div>
                        <div className="carousel-holder">
                            <div className="mt-4 event-carousel" id="event1">
                                <div className="empty-space mx-4 desktop-only"></div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event One
                                    </div>
                                </div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event Two
                                    </div>
                                </div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event Three
                                    </div>
                                </div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event Four
                                    </div>
                                </div>
                                <div className="empty-space mx-5 desktop-only">&nbsp;</div>
                            </div>
                            <div className="left-arrow desktop-only" onClick={() => leftScroll(1)}>&lt;</div>
                            <div className="right-arrow desktop-only" onClick={() => rightScroll(1)}>&gt;</div>
                        </div>

                        <div className="feature-image my-4 mr-2"></div>

                        <div className="event-type-title mt-3 mx-3">Upcoming - Day 2</div>
                        <div className="carousel-holder">
                            <div className="mt-4 event-carousel" id="event2">
                                <div className="empty-space mx-4 desktop-only"></div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event One
                                    </div>
                                </div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event Two
                                    </div>
                                </div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event Three
                                    </div>
                                </div>
                                <div className="event-carousel-item mt-4 mx-2">
                                    <div>
                                        Event Four
                                    </div>
                                </div>
                                <div className="empty-space mx-5 desktop-only">&nbsp;</div>
                            </div>
                            <div className="left-arrow desktop-only" onClick={() => leftScroll(2)}>&lt;</div>
                            <div className="right-arrow desktop-only" onClick={() => rightScroll(2)}>&gt;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
