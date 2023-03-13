import UseScript from "../hook/useScript";
import Nav from "./nav";

const Header = () => {
  UseScript();
  return (
    <header>
      <canvas id="canvas" />
      <Nav />
      <div className="container">
        <h1>Thomas Keim</h1>
        <p>Développeur Fullstack JS</p>
      </div>
    </header>
  );
};

export default Header;
