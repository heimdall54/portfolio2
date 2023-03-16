import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Compétence from "./components/competence";
import Contact from "./components/contact";
import Header from "./components/header";
import Presentation from "./components/presentation";
import Projet from "./components/projet";
import Services from "./components/services";
import UseScript from "./hook/useScript";
import "./styles/index.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInTop = (elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      x: -300,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center",
      },
    }
  );
};

function App() {
  UseScript();

  useEffect(() => {
    slideInTop("#presentation");
  });
  useEffect(() => {
    slideInTop("#competence");
  });
  useEffect(() => {
    slideInTop("#projet");
  });
  useEffect(() => {
    slideInTop("#services");
  });

  useEffect(() => {
    slideInTop("#contact");
  });

  return (
    <div className="App">
      <div className="containert">
        <Header id="box1" />
        <Presentation id="box2" />
        <Compétence id="box3" />
        <Projet id="box4" />
        <Services id="box5" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
