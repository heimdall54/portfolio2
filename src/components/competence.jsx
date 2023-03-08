const Compétence = () => {
  return (
    <div className="competence" id="competence">
      <div className="content">
        <div className="text-content">
          <h2>Compétence</h2>
          <div className="liste">
            <ul className="Language">
              <li>Language</li>
              <li>HTML/CSS : Bon niveau</li>
              <li>Javascript : Bon niveau</li>
              <li>Typescript : Niveau correct</li>
            </ul>
            <ul className="lib">
              <li>Library</li>
              <li>React : Bon niveau</li>
              <li>nodeJS : Bon niveau</li>
              <li>ExpressJS : Bon niveau</li>
            </ul>
            <ul className="outils">
              <li>Outils</li>
              <li>Git : Niveau correct</li>
              <li>Docker : En cours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compétence;
