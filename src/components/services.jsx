import ServiceCard from "./service-card";

const Services = () => {
  const serviesListe = [
    { titre: "Site static", prix: "20€ à 300€" },
    // { titre: "Site vitrine", prix: "50€ à 300€" },
    { titre: "Site dynamique", prix: "50€ à 1000€" },
    { titre: "Site e-commerce", prix: "100€ à 2000€" },
  ];
  return (
    <div className="services" id="services">
      <h1>Mes services</h1>
      <div className="services-container">
        {serviesListe.map((item) => (
          <ServiceCard key={item.titre} service={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
