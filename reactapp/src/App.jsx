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

import { getUser, loginUser, logoutUser } from "./actions/login";

var userKey = 1;

const App = (props) => {
    if(userKey){
        userKey = 0;
        getUser();
    }
    return (
        <>
            <Navbar props={props}/>
            <div id="main">
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/events" component={Dashboard} />
                        <Route path="/sponsors">
                            <Sponsors id="sponsors" />
                        </Route>
                        <Route path="/events-technical" component={TechEvent} />
                        <Route path="/events-cultural" component={CultEvent} />
                        <Route path="/" component={Home} />
                        <Route path="workshop" component={Workshop}/>
                        <Route path="*">
                            <div>
                                404 not found
                            </div>
                        </Route>                        
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
