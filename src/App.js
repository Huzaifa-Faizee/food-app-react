import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import ImporveSkills from "./components/improveSkill";
import QuoteSection from "./components/QuoteSection";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container main">
        <HeroSection/>
        <ImporveSkills/>
        <QuoteSection />
      </div>
    </div>
  );
}

export default App;
