import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";

const App = () => {
    return (
        <>
            <Intro id="home" />
            <div id="main">
                <Navbar />
                <Router>
                    <Switch>
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
