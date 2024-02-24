import "./App.css";
import AgencyServices from "./components/AgencyServices";
import Awards from "./components/Awards";
import BrandMarqee from "./components/BrandMarqee";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceHighlights from "./components/ServiceHighlights";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceHighlights />
      <BrandMarqee />
      <Awards />
      <AgencyServices />
    </div>
  );
}

export default App;
