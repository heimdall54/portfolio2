import Compétence from "./components/competence";
import Contact from "./components/contact";
import Header from "./components/header";
import Presentation from "./components/presentation";
import Projet from "./components/projet";
import Services from "./components/services";
import UseScript from "./hook/useScript";
import "./styles/index.css";

function App() {
  UseScript();

  return (
    <div className="App">
      <div className="containert">
        <Header />
        <Presentation />
        <Compétence />
        <Projet />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
