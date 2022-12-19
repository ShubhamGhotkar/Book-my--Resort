import "./Header.css";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../Home";
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

        <div id="div2" className="ul-list">
          <Link className="button" to="/">
            Home
          </Link>
          <Link className="button" to="/room">
            Room
          </Link>
          <Link className="button" to="/error">
            About
          </Link>
        </div>
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
