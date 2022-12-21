import Header from "../component/Header/Header";
import { Select } from "@mantine/core";
import { Slider, RangeSlider } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { NumberInput } from "@mantine/core";
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
  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];
  return (
    <>
      <div id="import-header-div">
        <Header />
      </div>
      <div id="room-container">
        <div id="search-room">
          <h2 id="h2">Search Rooms</h2>
        </div>
        <div id="search-bar">
          <div id="select_bar">
            <Select
              id="M-auto"
              label="Room Type"
              placeholder="Select Room"
              data={[
                { value: "All Rooms", label: "All Rooms" },
                { value: "Single Room", label: "Single Room" },
                { value: "Double Room", label: "Double Room" },
                { value: "Delux Room", label: "Delux Room" },
              ]}
            />
          </div>
          <div id="num-inpDiv">
            <NumberInput
              id="M-auto"
              defaultValue={1}
              placeholder="Guest"
              label="Guest"
              radius="md"
              // withAsterisk
            />
          </div>
          <div id="slider-div">
            {/* <RangeSlider defaultValue={[20, 80]} marks={marks} /> */}
            <Slider
              id="sl"
              color="teal"
              marks={[
                {
                  value: 20,
                  // label: "20%"
                },
                {
                  value: 50,
                  //  label: "50%"
                },
                {
                  value: 80,
                  //  label: "80%"
                },
              ]}
            />
          </div>

          <div id="ch-btn">
            <Checkbox
              className="ch-bx"
              label="Family"
              color="indigo"
              size="md"
            />
            <Checkbox
              className="ch-bx"
              label="Bachelor"
              color="indigo"
              size="md"
            />
          </div>
        </div>
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
