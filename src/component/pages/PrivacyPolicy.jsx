import InfoCard from "./InfoCard";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import { privacyPolicyArray } from "../../data container/Privacy_Policy.Data";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <InfoCard array={privacyPolicyArray} tittle={"Rooms Privacy Notice"} />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
