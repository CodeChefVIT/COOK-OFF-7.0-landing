import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Speakers from "./Components/Speakers/Speakers";
import Prizes from "./Components/Prizes/Prizes";
import EventSection from "./Components/EventSection/EventSection";
import Accordion from "./Components/Accordion/Accordion";
import Footer from "./Components/Footer/Footer";
import Timeline from "./Components/Timeline/Timeline";
import Banner from "./Components/Banner/Banner";
import Sponsors from "./Components/Sponsors/Sponsors";

function App() {
  console.log(
    "Yay! You did it. Raise your hand to claim the prize. Keep it a secret from your sneaky friends"
  );
  return (
    <div className="App">
      <Hero />
      <About />
      <Banner />
      <EventSection />
      <Prizes />
      <Speakers />
      <Sponsors />
      <Timeline />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
