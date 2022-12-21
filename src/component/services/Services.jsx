import "./services-style.css";

import { serviceArray } from "../../data container/ServiceArray.Data";

const Services = () => {
  return (
    <section id="service-section">
      <div id="service-tittle">
        <h3 id="ser-h3">OUR SERVICES</h3>
      </div>
      <div id="ser-card-container">
        {serviceArray.map((items) => {
          return (
            <section className="service-div">
              {<p className="p-icon">{items.icon}</p>}
              <h3>{items.tittle}</h3>
              <p>{items.description}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
