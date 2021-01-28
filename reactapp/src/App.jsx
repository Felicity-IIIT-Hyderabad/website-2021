import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import CampusReloaded from "./components/CampusReloaded";

const App = () => {
    return (
        <>
            <Intro />
            <Navbar />
            <About />
            <CampusReloaded />
            <About />
        </>
    );
};

export default App;
