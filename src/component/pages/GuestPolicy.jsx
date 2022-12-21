import Header from "../Header/Header";
import InfoCard from "./InfoCard";
import Footer2 from "../../footer2/Footer2";
import { guestPolicyArray } from "../../data container/GuestPolicyArray.Data";
const GuestPolicy = () => {
  return (
    <>
      <Header />
      <InfoCard
        array={guestPolicyArray}
        tittle={"Guest Policies For Hotels And Homes In India."}
      />
      <Footer2 />
    </>
  );
};
export default GuestPolicy;
