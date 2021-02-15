/* eslint-disable */

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Dashboard = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="mt-4 header-carousel">
                    <AwesomeSlider>
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
                    </AwesomeSlider>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-3 left-display">
                        <h2 className="text-center my-3 text-white"><strong>Your Events</strong></h2>
                        <div className="event-days d-flex justify-content-center mt-4">
                            <div className="mx-2 non-active-left text-center">DAY 1</div>
                            <div className="mx-2 text-center">DAY 2</div>
                            <div className="mx-2 non-active-right text-center">DAY 3</div>
                        </div>
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
                        </div>
                    </div>
                    <div className="col-md-9 right-display">
                        <div className="event-type-title mt-3 mx-3">Upcoming - Day 1</div>
                        <div className="mt-4 event-carousel">
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

                        <div className="feature-image my-4 mr-2"></div>

                        <div className="event-type-title mt-3 mx-3">Upcoming - Day 2</div>
                        <div className="mt-4 event-carousel">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
