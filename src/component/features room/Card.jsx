import "./featuresRoom-style.css";
const Card = (prop) => {
  return (
    <div className="featured-room">
      <div className="img-div">
        <div className="rate-div">
          <h3>{prop.rate}</h3>
          <p>{prop.time}</p>
        </div>
        <img src={prop.imgsource} alt="Room" />
      </div>
      <div className="room-type">
        <button className="room-btn">{prop.feature}</button>
      </div>
    </div>
  );
};
export default Card;
