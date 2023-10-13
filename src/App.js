import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import ImporveSkills from "./components/improveSkill";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container main">
        <HeroSection/>
        <ImporveSkills/>
      </div>
    </div>
  );
}

export default App;
