import "./App.css";
import AgencyServices from "./components/AgencyServices";
import Awards from "./components/Awards";
import BrandMarqee from "./components/BrandMarqee";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RecentNews from "./components/RecentNews";
import ServiceHighlights from "./components/ServiceHighlights";
import Subscribe from "./components/Subscribe";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeSay from "./components/WhatWeSay";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="mt-[107px]"></div>
      <ServiceHighlights />
      <div className="mt-[120px]"></div>
      <BrandMarqee />
      <div className="mt-[120px]"></div>
      <Awards />
      <div className="mt-[130px]"></div>
      <AgencyServices />
      <div className="mt-[120px]"></div>
      <WhatWeSay />
      <div className="mt-[113px]"></div>
      <WhatWeDo />
      <div className="mt-[120px]"></div>
      <ContactUs />
      <div className="mt-[120px]"></div>
      <RecentNews />
      <div className="mt-[158px]"></div>
      <Subscribe />
      <div className="mt-[80px] mb-[37px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
