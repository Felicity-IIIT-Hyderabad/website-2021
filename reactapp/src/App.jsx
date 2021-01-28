import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import CampusReloaded from "./components/CampusReloaded";

const App = () => {
    return (
        <>
            <Intro id="home" />
            <div id="main">
                <Navbar />
                <About id="about" />
                <CampusReloaded id="campus-reloaded" />
                <About id="contact" />
            </div>
        </>
    );
};

export default App;
