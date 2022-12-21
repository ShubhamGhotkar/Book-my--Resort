import Header from "../component/Header/Header";
import Num_Inp from "./Num_InpBar";
import Range_Bar from "./Range_Bar";
import Footer from "../component/footer/Footer";
import Check_Box from "./Check_Box";
import Toggle_Bar from "./Toggle_Bar";
import { dataArray } from "../Data";
import Room_Card from "./Room_Card";
import { checkBoxArray } from "../data container/checkBoxArray";
import "./rooms-style.css";
import "../component/features room/featuresRoom-style.css";

const Room = () => {
  return (
    <>
      <div id="import-header-div">
        <Header id="import-header-div" />
      </div>
      <div id="room-container">
        <div id="search-room">
          <h2 id="h2">Search Rooms</h2>
        </div>
        <div id="search-bar">
          <Toggle_Bar />
          <Num_Inp />
          <Range_Bar />
          <Check_Box prop={checkBoxArray} />
        </div>
      </div>

      <Room_Card dataArray={dataArray} />

      <Footer />
    </>
  );
};

export default Room;
