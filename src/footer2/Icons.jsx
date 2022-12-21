import { TfiTwitterAlt, TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { Link } from "react-router-dom";
const iconArray = [
  <TfiTwitterAlt id="f-i1" className="F-icon" />,
  <TfiYoutube id="f-i2" className="F-icon" />,
  <TfiInstagram id="f-i3" className="F-icon" />,
];

const Icon = () => {
  return <div id="icons-div">{iconArray.map((items) => items)}</div>;
};
export default Icon;

const Footer_PolicyArray = [
  <Link className="link" to="/guestpolicy">
    Guest Policy
  </Link>,
  <Link className="link" to="/termandcondition">
    Terms & Conditions
  </Link>,
  <Link className="link" to="/privacypolicy">
    Privacy Policy
  </Link>,
];
export function Policy() {
  return <div id="Finfo-div">{Footer_PolicyArray.map((items) => items)}</div>;
}
