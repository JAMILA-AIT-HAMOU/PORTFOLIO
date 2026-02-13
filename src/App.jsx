import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
export default App;
