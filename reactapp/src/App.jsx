import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TechEvent from "./components/TechEvent";
import CultEvent from "./components/CultEvent";
import Workshop from "./components/Workshop";

const App = () => {
    return (
        <>
            <Navbar />
            <Router>
                    <Switch>
                        <Route path="/workshop" component={Workshop} />
                        <Route path="/events-technical" component={TechEvent} />
                        <Route path="/events-cultural" component={CultEvent} />
                        <Route path="/" component={Home} />
                    </Switch>
            </Router>
            
        </>
    );
};

export default App;
