import Header from "./Header/Header";
import Main from "./main/Main";
import Services from "./services/Services";
import FeaturedRoom from "./features room/FeaturedRoom";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Main
        h1="Luxurious Rooms"
        p="Delux Rooms Starting At $399"
        button="Our Rooms"
      />
      <Services />
      <FeaturedRoom />
      <Footer />
    </>
  );
};

export default Home;
