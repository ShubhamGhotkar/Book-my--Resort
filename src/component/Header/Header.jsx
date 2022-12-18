import "./Header.css";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
const Header = () => {
  const [check, setCheck] = useState(false);
  return (
    <header>
      <div className="header-div">
        <div id="div1">
          <h1 id="h1">
            Book My
            <span>Resort</span>
          </h1>
        </div>

        <ul id="div2" className="ul-list">
          <li>Home</li>
          <li>Room</li>
          <li>About</li>
        </ul>
        <div id="div3" className="icon-div">
          <SlMenu
            className="icon"
            onClick={() => {
              setCheck(!check);
              if (check) {
                document.querySelector("#div2").style.display = "block";
              } else {
                document.querySelector("#div2").style.display = "none";
              }
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
