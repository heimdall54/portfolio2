import { useEffect, useState } from "react";
import Card from "./card";
import lador from "../assets/img/lador.JPG";
import todo from "../assets/img/todolist.PNG";
import portfolio from "../assets/img/portfolio.PNG";
import portfolio2 from "../assets/img/portfolio2.PNG";
import Tilt from "react-vanilla-tilt";

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
        img: todo,
        text: "site crée en react",
        lien: "http://github.com/akantor54",
      },
      {
        name: "test2",
        img: portfolio,
        text: "site crée en react",
        lien: "http://github.com/akantor54",
      },
      {
        name: "test3",
        img: portfolio2,
        text: "site crée en react",
        lien: "http://github.com/akantor54",
      },
    ];
    setProjet(p);
  }, []);
  // name, img, text, lien
  return (
    <div className="projet" id="projet">
      <h2>Projet</h2>
      <div className="projet-content">
        {projet.map((item) => (
          <Tilt
            key={item.name}
            className="card-titl"
            options={{
              glare: true,
              "max-glare": 1,
              scale: 1.2,
              speed: 1000,
              max: 30,
            }}
          >
            <Card key={item.name} project={item} />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projet;
