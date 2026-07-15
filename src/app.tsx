import { BrowserRouter } from "react-router-dom";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";
import { ScrollProgress } from "./components/scroll-progress";
import { CursorGlow } from "./components/cursor-glow";

// App
const App = () => {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
