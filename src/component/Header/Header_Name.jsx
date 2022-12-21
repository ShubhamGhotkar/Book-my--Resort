import { SlMenu } from "react-icons/sl";
import { navArrayData } from "../../data container/navArray.Data";
import { Link } from "react-router-dom";
const Header_Name = ({ h1, u }) => {
  return (
    <div id="div1">
      <h1 id="h1">
        {h1}
        <span>
          <u>{u}</u>
        </span>
      </h1>
    </div>
  );
};

export default Header_Name;

export function NavBar() {
  return (
    <div id="div2" className="ul-list">
      {navArrayData.map((items) => items)}
    </div>
  );
}

export function ToggleButton() {
  return (
    <div id="div3" className="icon-div">
      <SlMenu className="icon" />
    </div>
  );
}
