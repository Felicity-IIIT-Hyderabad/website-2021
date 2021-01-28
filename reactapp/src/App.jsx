import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import CampusReloaded from "./components/CampusReloaded";
import ThreePs from "./components/ThreePs";

const App = () => {
    return (
        <>
            <Intro id="home" />
            <div id="main">
                <Navbar />
                <About id="about" />
                <CampusReloaded id="campus-reloaded" />
                <Events id="events" />
                <ThreePs />
                <Contact id="contact" />
            </div>
        </>
    );
};

export default App;
