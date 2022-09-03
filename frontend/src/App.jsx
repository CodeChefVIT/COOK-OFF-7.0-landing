import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/home";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Home />} />
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
