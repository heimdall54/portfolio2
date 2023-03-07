import UseScript from "../hook/useScript";

const Header = () => {
  UseScript();
  return (
    <header>
      <canvas id="canvas" />
      <nav>
        <li>
          <a href="#presentation">Présentation</a>
        </li>
        <li>
          <a href="#competence">Compétence</a>
        </li>
        <li>
          <a href="#projet">Projet</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </nav>
      <div className="container">
        <h1>Thomas Keim</h1>
        <p>Développeur Fullstack JS</p>
      </div>
    </header>
  );
};

export default Header;
