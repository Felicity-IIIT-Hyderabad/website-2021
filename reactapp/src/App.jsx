import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Sponsors from "./components/Sponsors"

const App = () => {
    return (
        <>
            <div id="main">
                <Navbar />
                <Router>
                    <Switch>
		                <Route path="/sponsors">
                          <Sponsors id="sponsors" />
                        </Route>

                        <Route path="/">
                            <Intro id="home" />
                            <Home />
                        </Route>

                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
