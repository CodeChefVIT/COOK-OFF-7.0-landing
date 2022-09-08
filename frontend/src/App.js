import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";
import HowReg from "./pages/HowReg";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about-event" element={<About />} />
          <Route path="/timeline-prizes" element={<Timeline />} />
          <Route path="/past-sponsors" element={<Sponsors />} />
          <Route path="/how-to-register" element={<HowReg />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
