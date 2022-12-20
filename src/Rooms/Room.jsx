import Header from "../component/Header/Header";
import Footer from "../component/footer/Footer";
import Card from "../component/features room/Card";
import { cardArray } from "../component/features room/FeaturedRoom";
import "./rooms-style.css";
import "../component/features room/featuresRoom-style.css";

const cardArray2 = [
  ...cardArray,
  ...cardArray,
  ...cardArray,
  ...cardArray,
  ...cardArray,
  ...cardArray,
];

const Room = () => {
  return (
    <>
      <div id="import-header-div">
        <Header />
      </div>
      <div id="room-container">
        <div id="search-room">
          <h2 id="h2">Search Rooms</h2>
        </div>
        <div id="search-bar"></div>
      </div>
      <div id="room-card">
        <div id="card-container">
          {cardArray2.map((items) => {
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
      </div>
      <Footer />
    </>
  );
};

export default Room;
