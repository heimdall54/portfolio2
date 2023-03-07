import { useEffect, useState } from "react";
import Card from "./card";
import lador from "../assets/img/lador.JPG";
const Projet = () => {
  const [projet, setProjet] = useState([]);

  useEffect(() => {
    const p = [
      {
        name: "test",
        img: lador,
        text: "site crée en pur html css",
        lien: "http://github.com/akantor54",
      },
      {
        name: "test1",
        img: lador,
        text: "site crée en react",
        lien: "http://github.com/akantor54",
      },
      {
        name: "test2",
        img: lador,
        text: "site crée en react",
        lien: "http://github.com/akantor54",
      },
      {
        name: "test3",
        img: lador,
        text: "site crée en react",
        lien: "http://github.com/akantor54",
      },
    ];
    setProjet(p);
  }, []);
  // name, img, text, lien
  return (
    <div className="projet" id="projet">
      <div className="projet-content">
        {projet.map((item) => (
          <Card key={item.name} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Projet;
