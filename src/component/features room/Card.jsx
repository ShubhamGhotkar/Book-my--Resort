import { useState } from "react";
import "./featuresRoom-style.css";
const Card = (prop) => {
  const [show, setShow] = useState(true);

  const css = { backgroundImage: `url ${prop.imgsource}` };
  return (
    <div className="featured-room">
      <div className="img-div">
        <div className="rate-div">
          <h3>{prop.rate}</h3>
          <p>{prop.time}</p>
        </div>

        <div className="hei-wid-full ">
          <img src={prop.imgsource} alt="Room" className="hei-wid-full " />
        </div>
      </div>

      <div id="btns-div">
        <button className="room-btn">{prop.feature}</button>
      </div>
    </div>
  );
};
export default Card;
