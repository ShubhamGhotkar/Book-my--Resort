import { TfiTwitterAlt, TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TermConditon from "../component/pages/TermCondition";
import GuestPolicy from "../component/pages/GuestPolicy";
import PrivacyPolicy from "..//component/pages/PrivacyPolicy";
// import "../component/pages/termCond-style.css";
import "./footer2.style.css";

const Footer2 = () => {
  return (
    <footer id="footer2">
      <div id="footer-container">
        <div id="f-div1">
          <p id="div1-para">BOOK MY RESORT</p>
          <button id="div1-btn">
            <BsFillPersonFill id="btn-icon" />
            Login
          </button>
        </div>
        <div id="div2">
          <div id="company-info" className="boxclass">
            <p className="bolder-text">About us</p>
            <p>Partner with us</p>
            <p>Join our team</p>
            <p>Our blog</p>
            <p>Executive Student Discount</p>
          </div>
          <div id="help-center" className="boxclass">
            <p className="bolder-text">Customer Support Chat</p>
            <p>0000-BOOK-RESORT</p>
            <p>support.xy@resortrooms.com</p>
          </div>
          <div id="community" className="boxclass">
            <p className="bolder-text">
              Join our network and grow your business with us!
            </p>
            <button id="community-btn">List your property</button>
          </div>
          <div id="visit-div" className="boxclass">
            <p className="bolder-text">Visit for exciting offers.</p>
            <div id="btn-div">
              <button>ROOMS</button>
              <button>HOME</button>
            </div>
          </div>
        </div>
        <div id="div3">
          <div id="icons-div">
            <TfiTwitterAlt id="f-i1" className="F-icon" />
            <TfiYoutube id="f-i2" className="F-icon" />
            <TfiInstagram id="f-i3" className="F-icon" />
          </div>
          <div id="Finfo-div">
            <Link className="link" to="/guestpolicy">
              Guest Policy
            </Link>
            <Link className="link" to="/termandcondition">
              Terms & Conditions
            </Link>
            <Link className="link" to="/privacypolicy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
