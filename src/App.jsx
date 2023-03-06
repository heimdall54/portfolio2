import UseScript from "./hook/useScript";
import "./styles/index.css";

function App() {
  UseScript();

  return (
    <div className="App">
      <canvas id="canvas" />
      <nav>
        <li>
          <p>Présentation</p>
        </li>
        <li>
          <p>Compétence</p>
        </li>
        <li>
          <p>Projet</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </nav>
      <div className="container">
        <h1>Thomas Keim</h1>
        <p>Développeur Fullstack JS</p>
      </div>
    </div>
  );
}

export default App;
