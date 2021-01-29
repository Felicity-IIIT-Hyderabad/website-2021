import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import CampusReloaded from "./components/CampusReloaded";
import ThreePs from "./components/ThreePs";

const App = () => {
    const [scrollLocked, setScrollLocked] = useState(true);
    useEffect(() => setTimeout(() => setScrollLocked(false), 8000), []);

    return (
        <>
            <Intro id="home" scrollLocked={scrollLocked} />
            {!scrollLocked && <Navbar />}
            <About id="about" />
            <CampusReloaded />
            <Events id="events" />
            <ThreePs />
            <Contact id="contact" />
        </>
    );
};

export default App;
