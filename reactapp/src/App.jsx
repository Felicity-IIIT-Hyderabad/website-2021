import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Sponsors from "./components/Sponsors";
import TechEvent from "./components/TechEvent";
import CultEvent from "./components/CultEvent";
import Workshop from "./components/Workshop";

const App = () => {
    return (
        <>
            <div id="main">
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/sponsors">
                            <Sponsors id="sponsors" />
                        </Route>
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
