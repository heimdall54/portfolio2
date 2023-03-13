const ServiceCard = ({ service }) => {
  return (
    <div className="pack-container">
      <div className="header">
        <p className="title">{service.titre}</p>
        <div className="price-container">
          <span>{service.prix}</span>
        </div>
      </div>
      <div>
        <ul className="lists">
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>Garantie</p>
          </li>
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>Optimiser</p>
          </li>
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>Livraison rapide</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ServiceCard;
