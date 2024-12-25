import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";

console.log("App.jsx: App component initialized");

const App = () => {
  console.log("App.jsx: Rendering App component");
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {console.log("App.jsx: Rendering Navbar")}
          <Navbar />
          {console.log("App.jsx: Rendering Hero")}
          <Hero />
        </div>
        {console.log("App.jsx: Rendering About")}
        <About />
        {console.log("App.jsx: Rendering Experience")}
        <Experience />
        {console.log("App.jsx: Rendering Tech")}
        <Tech />
        {console.log("App.jsx: Rendering Works")}
        <Works />
        <div className="relative z-0">
          {console.log("App.jsx: Rendering Contact")}
          <Contact />
          {console.log("App.jsx: Rendering StarsCanvas")}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
