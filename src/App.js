import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import HowToJoin from "./components/HowToJoin/HowToJoin";
import Schedule from "./components/Schedule/Schedule";
import Projects from "./components/Projects/Projects";
import OfficerTeam from "./components/OfficerTeam/OfficerTeam";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <WhatWeDo />
      <HowToJoin />
      <Schedule />
      <Projects />
      <OfficerTeam />
      <Footer />
    </div>
  );
}

export default App;
