import { BsFillPersonFill } from "react-icons/bs";
import "./footer2.style.css";

const Footer2 = () => {
  return (
    <footer id="footer2">
      <div id="footer-container">
        <div id="div1">
          <p id="div1-para">BOOK MY RESORT</p>
          <button id="div1-btn">
            <BsFillPersonFill id="btn-icon" />
            Login
          </button>
        </div>
        <div id="div2">
          <div id="company-info" className="boxclass">
            <p>About us</p>
            <p>Partner with us</p>
            <p>Join our team</p>
            <p>Our blog</p>
            <p>Executive Student Discount</p>
          </div>
          <div id="help-center" className="boxclass">
            <p>Customer Support Chat</p>
            <p>0000-BOOK-RESORT</p>
            <p>support.xy@resortrooms.com</p>
          </div>
          <div id="community" className="boxclass">
            <p>Join our network and grow your business with us!</p>
            <button id="community-btn">List your property</button>
          </div>
          <div id="visit-div" className="boxclass">
            <p>Visit for exciting offers.</p>
            <button id="room-btn">ROOMS</button>
            <button id="home-btn">HOME</button>
          </div>
        </div>
        <div id="div3"></div>
      </div>
    </footer>
  );
};
export default Footer2;
