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
            <Navbar />
            <About id="about" />
            <CampusReloaded />
            <Events id="events" />
            <ThreePs />
            <Contact id="contact" />
        </>
    );
};

export default App;
