const CardSkill = ({ skill }) => {
  return (
    <div className="card">
      <div className="header">{skill.name}</div>
      <div className="body">
        {skill.skill.map((item) => (
          <div key={item.lang} className="skill">
            <div className="skill-name">{item.lang}</div>
            <div className="skill-level">
              <div className={"skill-percent " + item.classCss}></div>
            </div>
            <div className="skill-percent-number">{item.pourcant}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSkill;
