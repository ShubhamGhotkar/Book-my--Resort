import "./services-style.css";
const ServiceCard = ({ items }) => {
  return (
    <div className="service-div">
      {<p className="p-icon">{items.icon}</p>}
      <h3>{items.tittle}</h3>
      <p>{items.description}</p>
    </div>
  );
};

export default ServiceCard;
