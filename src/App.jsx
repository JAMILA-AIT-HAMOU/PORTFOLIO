import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

import BuildFromScratch from "./pages/BuildFromScratch";
import RedesignProjects from "./pages/RedesignProjects";

function App() {
  const page= new URLSearchParams(window.location.search).get("page")

  if (page==="build"){
    return (
      <>
      <Navbar />
      <div className="container">
        <BuildFromScratch />
      </div>
    </>
    )
  }
  if (page==="redesigns"){
    return (
      <>
      <Navbar />
      <div className="container">
        <RedesignProjects />
      </div>
    </>
    )
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;
