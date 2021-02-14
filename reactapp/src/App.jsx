import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Sponsors from "./components/Sponsors"
import TechEvent from "./components/TechEvent";
import CultEvent from "./components/CultEvent";
import CPWorkshop from "./components/CPWorkshop";
import MLWorkshop from "./components/MLWorkshop";
import Workshop from "./components/Workshop";

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
                        <Route path="/workshop/cp" component={CPWorkshop} />
                        <Route path="/workshop/ml" component={MLWorkshop} />
                        <Route path="/workshop" component={Workshop} />
                        <Route path="/events-technical" component={TechEvent} />
                        <Route path="/events-cultural" component={CultEvent} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
