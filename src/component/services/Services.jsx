import "./services-style.css";
import { BiDrink } from "react-icons/bi";
import { FaAccessibleIcon, BiBusSchool, CiBeerMugFull } from "react-icons/fa";

const sericesArray = [
  {
    icon: <BiDrink className="icon-big" />,
    tittle: "Free Crocktails",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    icon: <BiDrink className="icon-big" />,
    tittle: "Endless Hiking",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    icon: <BiDrink className="icon-big" />,
    tittle: "Free Shuttle",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
];
const Services = () => {
  return (
    <section id="service-section">
      {sericesArray.map((items) => {
        return (
          <div className="service-div">
            {<p className="p-icon">{items.icon}</p>}
            <h3>{items.tittle}</h3>
            <p>{items.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
