import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import Login from "./components/Login";
import Sponsors from "./components/Sponsors";
import TechEvent from "./components/TechEvent";
import CultEvent from "./components/CultEvent";
import Workshop from "./components/Workshop";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import PrivacyPolicy from "./components/PrivacyPolicy";

import { getUser, loginUser, logoutUser } from "./actions/login";

var userKey = 1;

const App = (props) => {
    if (userKey) {
        userKey = 0;
        getUser();
        console.log(props);
    }

    function renderEvents(){
        try{
            if(!props.userInfo.loginReducer.authenticated){
                return (
                    <>
                        <Route path="/events" component={Home} />
                        <Route path="/events-technical" component={Home} />
                        <Route path="/events-cultural" component={Home} />
                        <Route path="/" component={Home} />
                    </>                
                );
            }
            else{
                return (
                    <>
                        <Route path="/events" component={Dashboard} />
                        <Route path="/events-technical" component={TechEvent} />
                        <Route path="/events-cultural" component={CultEvent} />
                    </>
                );
            }
        }
        catch{
            return (
                <>
                    <Route path="/events" component={Dashboard} />
                    <Route path="/events-technical" component={TechEvent} />
                    <Route path="/events-cultural" component={CultEvent} />
                </>
            );
        }
    }

    return (
        <>
            <Navbar props={props} />
            <div id="main">
                <Router>
                    <Switch>
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/workshop" component={Workshop} />
                        <Route path="/login" component={Login} />
                        <Route path="/our-team" component={OurTeam} />
                        <Route path="/sponsors">
                            <Sponsors id="sponsors" />
                        </Route>
                        {renderEvents()}           
                        <Route path="/" component={Home} />                        
                    </Switch>
                </Router>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    userInfo: state,
});

const mapDispatchToProps = () => ({
    loginUser: loginUser,
    logoutUser: logoutUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
