import Card from "./Card";
import { roomCardArray } from "../../data container/Room_Card_Array.Data";
import "./featuresRoom-style.css";

const FeaturedRoom = () => {
  return (
    <section id="room-section">
      <div id="room-tittle">
        <h2>Featured Rooms</h2>
      </div>
      <div id="card-container">
        {roomCardArray.map((items) => {
          return (
            <Card
              imgsource={items.imgsource}
              rate={items.rate}
              time={items.time}
              feature={items.feature}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedRoom;
