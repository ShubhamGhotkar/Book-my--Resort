import { Checkbox } from "@mantine/core";
import { propTypes } from "react-bootstrap/esm/Image";
import "./rooms-style.css";
import "../component/features room/featuresRoom-style.css";
const Check_Box = ({ prop }) => {
  return (
    <div id="ch-btn">
      {prop.map((items) => {
        return (
          <Checkbox
            className={items.className}
            label={items.label}
            color={items.color}
            size={items.size}
          />
        );
      })}
    </div>
  );
};
export default Check_Box;
