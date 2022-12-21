import Icon, { Policy } from "./Icons";
import Footer_Header from "./Footer_Header";

import "./footer2.style.css";
import { Comp_info, Help_Center, Community, Visit } from "./Main_Footer";

const Footer2 = () => {
  return (
    <footer id="footer2">
      <section id="footer-container">
        <Footer_Header />
        <div id="div2">
          <Comp_info />
          <Help_Center />
          <Community />
          <Visit />
        </div>

        <div id="div3">
          <Icon />
          <Policy />
        </div>
      </section>
    </footer>
  );
};
export default Footer2;
