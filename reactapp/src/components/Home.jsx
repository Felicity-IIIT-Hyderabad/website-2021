import React from "react";
import { connect } from "react-redux";
import RetroHitCounter from 'react-retro-hit-counter';

import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import CampusReloaded from "./CampusReloaded";
import ThreePs from "./ThreePs";
import { getUser } from "../actions/login";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
    }

    componentDidMount = () => {
        getUser();
    }

    componentDidUpdate = () => {
        if(this.state.key){
            this.setState({
                key:0
            });
        }
    }

    render() {
        return (
            <>
                <Intro id="home" />
                <div id="main">
                    <About id="about" />
                    <CampusReloaded />
                    <Events id="events" />
                    <ThreePs />
                    <Contact id="contact" />
                    <div className="text-center">
                        <RetroHitCounter
                                hits={1337}
                            /* The following are all default values: */
                            withBorder={true}
                            withGlow={false}
                            minLength={4}
                            size={40}
                            padding={4}
                            digitSpacing={3}
                            segmentThickness={4}
                            segmentSpacing={0.5}
                            segmentActiveColor="#76FF03"
                            segmentInactiveColor="#315324"
                            backgroundColor="#222222"
                            borderThickness={7}
                            glowStrength={0.5}
                        />                
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => (
    {
        userInfo: state,
    });

export default connect(mapStateToProps)(Home);

