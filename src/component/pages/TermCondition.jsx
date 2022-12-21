import "./termCond-style.css";
import InfoCard from "./InfoCard";
import Header from "../Header/Header";
import Footer2 from "../../footer2/Footer2";
import { term_Condition_Array } from "../../data container/term_Condition_Array.Data";

const TermConditon = () => {
  return (
    <>
      <Header />
      <InfoCard
        key={Math.random()}
        array={term_Condition_Array}
        tittle={"Terms and conditions"}
      />
      <Footer2 />
    </>
  );
};
export default TermConditon;
