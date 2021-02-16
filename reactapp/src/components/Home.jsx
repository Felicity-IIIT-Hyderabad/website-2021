import React from "react";
import { connect } from "react-redux";
import Intro from "./Intro";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import CampusReloaded from "./CampusReloaded";
import ThreePs from "./ThreePs";
import Navbar from "./Navbar";
import store from "../store";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            key: 1
        };
    }

    componentDidMount = () => {
        console.log("BHAYA");
        console.log(this.props);
        console.log(store.getState());
    }

    componentDidUpdate = () => {
        if(this.state.key){
            console.log(this.props);
            this.setState({
                key:0
            });
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <Intro id="home" />
                <div id="main">
                    <About id="about" />
                    <CampusReloaded />
                    <Events id="events" />
                    <ThreePs />
                    <Contact id="contact" />
                    <div>
                        {console.log(this.props)}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => (
    console.log(state),    
    {
        userInfo: state,
    });

export default connect(mapStateToProps)(Home);

