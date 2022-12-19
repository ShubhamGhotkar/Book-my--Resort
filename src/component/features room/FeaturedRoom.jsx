import Card from "./Card";
import "./featuresRoom-style.css";
export const cardArray = [
  {
    imgsource:
      "https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=376&dpr=2.6",
    rate: "$400",
    time: "Per Night",
    feature: "Single Room",
  },
  {
    imgsource:
      "https://st.depositphotos.com/1164721/2078/i/450/depositphotos_20784379-stock-photo-interior-of-modern-comfortable-hotel.jpg",
    rate: "$799",
    time: "Per Night",
    feature: "Double Room",
  },
  {
    imgsource:
      "https://s7d2.scene7.com/is/image/ritzcarlton/RCKUALA_00123?$XlargeViewport100pct$",
    rate: "$1400",
    time: "Per Night",
    feature: "Delux Room",
  },
];

const FeaturedRoom = () => {
  return (
    <section id="room-section">
      <div id="room-tittle">
        <h2>Featured Rooms</h2>
      </div>
      <div id="card-container">
        {cardArray.map((items) => {
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
