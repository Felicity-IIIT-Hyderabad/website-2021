import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import Login from "./components/Login";
import Sponsors from "./components/Sponsors";
import TechEvent from "./components/TechEvent";
import SingleEvent from "./components/SingleEvent";
// import SingleEvent from "./components/SingleEvents/spacesc";
import SingleEventRplay from "./components/SingleEvents/SingleEventRplay";
import CultEvent from "./components/CultEvent";
import Help from "./components/Help";
import Workshop from "./components/Workshop";
import Dashboard from "./components/Dashboard";
import MyTeams from "./components/MyyTeams";
// import Help from "./components/Help";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ErrorPage from "./components/ErrorPage";
import InvitePage from "./components/InvitePage";
import { loginUser } from "./actions/login";

import { getUser } from "./actions/login";

var userKey = true;

const App = (props) => {
    if (userKey != props.userInfo.authenticated) {
        userKey = props.userInfo.authenticated;
        getUser();
    }

    function renderEvents(){
        try{
            if(!props.userInfo.loginReducer.authenticated){
                return (
                    <>
                        <Route exact path="/invite/*" component={InvitePage} />
                        <Route exact path="/404" component={ErrorPage} />
                        <Route path="/event/*" component={SingleEvent} />
                        <Route exact path="/events" component={Home} />
                        <Route exact path="/events-technical" component={Home} />
                        <Route exact path="/events-cultural" component={Home} />
                        <Route exact path="/" component={Home} />
                    </>                
                );
            }
            else{
                return (
                    <>
                        <Route exact path="/invite/*" component={InvitePage} />
                        <Route path="/myteams" component={MyTeams} />
                        <Route exact path="/404" component={ErrorPage} />
                        <Route exact path="/event/*" component={SingleEvent} />
                        <Route exact path="/events" component={Dashboard} />
                        <Route path="/events-technical" component={TechEvent} />
                        <Route path="/events-cultural" component={CultEvent} />
                        {/* <Route path="/" component={Home} /> */}
                    </>
                );
            }
        }
        catch{
            return (
                <>
                    <Route exact path="/invite" component={InvitePage} />
                    <Route path="/myteams" component={MyTeams} />
                    <Route exact path="/event/*" component={SingleEvent} />
                    <Route exact path="/events" component={Dashboard} />
                    <Route path="/events-technical" component={TechEvent} />
                    <Route path="/events-cultural" component={CultEvent} />
                    {/* <Route path="/" component={Home} /> */}
                </>
            );
        }
    }

    return (
        <>
            <Navbar props={props} loginUser={loginUser}/>
            <div id="main">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />                        
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/workshop" component={Workshop} />
                        <Route path="/login" component={Login} />
                        <Route path="/help" component={Help} />
                        <Route path="/our-team" component={OurTeam} />
                        {/* <Route path="/astronomy-spacesc" component={} /> */}
                        {/* <Route exact path="/404" component={ErrorPage} /> */}
                        {/* <Route exact path="/events/rplay" component={SingleEventRplay} /> */}
                        <Route path="/sponsors">
                            <Sponsors id="sponsors" />
                        </Route>
                        {renderEvents()}
                        <Redirect from="*" to="/404"/>
                    </Switch>
                </Router>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    userInfo: state,
});

const mapDispatchToProps = dispatch => ({
    loginUser:  (keycloak) => dispatch({ type: "LOGIN", keycloak }),
    logoutUser:  () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
