import "./featuresRoom-style.css";
const Card = (prop) => {
  const css = { backgroundImage: `url ${prop.imgsource}` };
  return (
    <section className="featured-room">
      <div className="img-div">
        <div className="rate-div">
          <h3>&#8377;{prop.rate}</h3>
          <p>{prop.time || "Per Night"}</p>
        </div>
        <img src={prop.imgsource} alt="Room" className="hei-wid-full " />
      </div>

      <div id="btns-div">
        <button className="room-btn">{prop.feature}</button>
      </div>
    </section>
  );
};
export default Card;
