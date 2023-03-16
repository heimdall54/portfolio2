import { useEffect } from "react";
import CardSkill from "./card-skill";
import gsap from "gsap";

const Compétence = () => {
  const skills = [
    {
      name: "Language",
      skill: [
        {
          lang: "Html/Css",
          pourcant: "90%",
          classCss: "pourcant90",
        },
        {
          lang: "Javascript",
          pourcant: "70%",
          classCss: "pourcant70",
        },
        {
          lang: "Typescript",
          pourcant: "50%",
          classCss: "pourcant50",
        },
      ],
    },
    {
      name: "Framework",
      skill: [
        {
          lang: " React",
          pourcant: "70%",
          classCss: "pourcant70",
        },
        {
          lang: "NextJS",
          pourcant: "10%",
          classCss: "pourcant10",
        },
        {
          lang: "ExpressJS",
          pourcant: "60%",
          classCss: "pourcant60",
        },
      ],
    },
    {
      name: "Outlis",
      skill: [
        {
          lang: "Git/Github",
          pourcant: "40%",
          classCss: "pourcant40",
        },
        {
          lang: "Docker",
          pourcant: "10%",
          classCss: "pourcant10",
        },
      ],
    },
  ];

  useEffect(() => {});

  return (
    <div className="competence" id="competence">
      <div className="content">
        <div className="text-content">
          <h2>Compétence</h2>
          <div className="liste">
            {skills.map((skill) => (
              <CardSkill key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compétence;
