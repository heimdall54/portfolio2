import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <a
            onClick={handleShowLinks}
            href="#presentation"
            className="navbar_link"
          >
            Présentation
          </a>
        </li>
        <li className="navbar_item slideInDown-2">
          <a
            onClick={handleShowLinks}
            href="#competence"
            className="navbar_link"
          >
            Compétence
          </a>
        </li>
        <li className="navbar_item slideInDown-3">
          <a onClick={handleShowLinks} href="#projet" className="navbar_link">
            Projet
          </a>
        </li>
        <li className="navbar_item slideInDown-4">
          <a onClick={handleShowLinks} href="#services" className="navbar_link">
            Service
          </a>
        </li>
        <li className="navbar_item slideInDown-5">
          <a onClick={handleShowLinks} href="#contact" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
