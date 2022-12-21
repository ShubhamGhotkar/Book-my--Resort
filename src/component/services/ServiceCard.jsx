import "./services-style.css";
const ServiceCard = ({ items }) => {
  return (
    <section className="service-div">
      {<p className="p-icon">{items.icon}</p>}
      <h3>{items.tittle}</h3>
      <p>{items.description}</p>
    </section>
  );
};

export default ServiceCard;
