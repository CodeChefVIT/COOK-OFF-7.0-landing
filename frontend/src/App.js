import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Speakers from "./Components/Speakers/Speakers";
import EventSection from "./Components/EventSection/EventSection";
import Accordion from "./Components/Accordion/Accordion";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <EventSection />
      <Speakers />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
