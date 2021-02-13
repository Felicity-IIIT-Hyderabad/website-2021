import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TechEvent from "./components/TechEvent";
import CultEvent from "./components/CultEvent";
import CPWorkshop from "./components/CPWorkshop";
import MLWorkshop from "./components/MLWorkshop";
import Workshop from "./components/Workshop";

const App = () => {
    return (
        <>
            <Navbar />
            <Router>
                    <Switch>
                        <Route path="/workshop/cp" component={CPWorkshop} />
                        <Route path="/workshop/ml" component={MLWorkshop} />
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
