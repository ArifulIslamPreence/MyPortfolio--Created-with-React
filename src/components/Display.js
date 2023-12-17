import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Certification from "./Certification"

export default function Display() {
  return (
    <div className="lg:pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Resume />
      <Projects />
        <Certification/>
      <Contact />
    </div>
  );
}
