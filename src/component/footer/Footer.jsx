import { TfiTwitterAlt, TfiYoutube, TfiInstagram } from "react-icons/tfi";
import "./footer-style.css";
const Array1 = [
  { titile: "About Us" },
  { titile: "Terms and conditions" },
  { titile: "Guest Policies" },
  { titile: "Privacy Policy" },
  { titile: "Trust And Safety" },
];
const Array2 = [
  { titile: "About Us" },
  { titile: "Terms and conditions" },
  { titile: "Guest Policies" },
  { titile: "Privacy Policy" },
  { titile: "Trust And Safety" },
];
const Array3 = [
  { city: "Hotels in Mumbai" },
  { city: "Hotels in Puna" },
  { city: "Hotels in Nagpur" },
  { city: "Hotels in Gondia" },
  { city: "Hotels in Amravati" },
  { city: "Hotels in Agra" },
  { city: "Hotels in Akola" },
  { city: "Hotels in Shegao" },
  { city: "Hotels in Asam" },
  { city: "Hotels in New Delhi" },
  { city: "Hotels in Rajastan" },
  { city: "Hotels in Kotha" },
  { city: "Hotels in Goa" },
  { city: "Hotels in Wardha" },
  { city: "Hotels in Gujrat" },
  { city: "Hotels in Banglore" },
  { city: "Hotels in Tiwsa" },
  { city: "Hotels in YavatMal" },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerdiv">
          <div id="footerdiv1">
            <p id="footer-p1">Book My Resort</p>
            <p id="footer-p2">World Leading Chain Of Hotels and Homes</p>
          </div>
          <hr />
        </div>

        <div id="Tc-container">
          <div id="soc-media-icon">
            <TfiTwitterAlt className="footer-icon" />
            <TfiYoutube className="footer-icon" />
            <TfiInstagram className="footer-icon" />
          </div>
          <div className="tc-container-div">
            {Array1.map((item) => {
              return <p className="para-tag">{item.titile}</p>;
            })}
          </div>
          <div id="item-div" className="tc-container-div">
            {Array2.map((item) => {
              return <p className="para-tag">{item.titile}</p>;
            })}
          </div>
        </div>
        <hr />
        <div id="city">
          {Array3.map((items) => {
            return <p className="city-para">{items.city}</p>;
          })}
        </div>
        <hr />
      </footer>
    </>
  );
};
export default Footer;
