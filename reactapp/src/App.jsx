import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
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
                <ThreePs />
            </div>
        </>
    );
};

export default App;
