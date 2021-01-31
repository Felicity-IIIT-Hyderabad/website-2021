import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import CampusReloaded from "./components/CampusReloaded";
import ThreePs from "./components/ThreePs";
import Home from "./components/Home";


const App = () => {
    return (
        <>
            <Intro id="home" />
            <div id="main">
                <Navbar />
                    <Router>
                        <Switch>
                            <Route path="/about">
                                {/* <About /> */}
                            </Route>
                            <Route path="/users">
                                {/* <Users /> */}
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
