import Card from "../component/features room/Card";
import "./rooms-style.css";
import "../component/features room/featuresRoom-style.css";
const Room_Card = ({ dataArray }) => {
  return (
    <div id="room-card">
      <div id="card-container">
        {dataArray.map((items) => {
          return (
            <Card
              imgsource={items.fields.images[0].fields.file.url}
              rate={items.fields.price}
              time={items.time}
              feature={items.fields.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Room_Card;
