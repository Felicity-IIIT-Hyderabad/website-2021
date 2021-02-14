import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
    return (
        <>
            <Intro id="home" />
            <div id="main">
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
