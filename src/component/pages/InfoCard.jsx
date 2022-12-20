import "./termCond-style.css";
const InfoCard = ({ array, tittle }) => {
  return (
    <section id="tc-container">
      <div id="tc-tittle">
        <h1>{tittle}</h1>
      </div>
      <div id="info-div">
        {array.map((items) => {
          return (
            <div className="tc-div">
              <h3>
                <u>{items.tittle}</u>
              </h3>
              <p>{items.description}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoCard;
