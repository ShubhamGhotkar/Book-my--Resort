import "./termCond-style.css";
import InfoCard from "./InfoCard";
import Header from "../Header/Header";
import Footer2 from "../../footer2/Footer2";

const Array = [
  {
    tittle: "Book My Resort Privacy Notice",
    description:
      "repudiandae nobis magni corrupti in? Eius natus, molestiae accusamus totam harum cumque ipsa officiis at, eligendi iure explicabo fugit? Sapiente qui autem, illum itaque, ipsum modi placeat officia temporibus neque quos officiis. Hic molestias blanditiis ipsum optio reiciendis eum culpa adipisci at recusandae eos, quis in labore alias dolores, dolor modi similique consequatur magnam cumque illum!",
  },
  {
    tittle: "Information about OYO",
    description:
      "sit, hic praesentium. Qui minima aliquid eum at praesentium quod neque, veritatis laudantium odit doloribus amet error vitae alias est sint voluptates tempore deleniti sapiente voluptate debitis. Dolore, corrupti. Officiis quas accusantium dolor ab, dolores obcaecati commodi, vel sed et accusamus cumque blanditiis saepe! Perferendis, sint tempora ab quo ipsam, excepturi dolores inventore fugit cumque tenetur sit obcaecati. Dolorum, earum vel? Illum deleniti dolorem nemo, fugit molestias possimus modi, delectus reprehenderit aspernatur saepe ab corporis eum alias ducimus tempore est! Accusamus corporis qui in explicabo assumenda obcaecati dolorem possimus ",
  },
  {
    tittle: "Scope of our privacy notice",
    description:
      "eum eius optio sapiente suscipit ex! Similique ex iste nesciunt consequatur esse atque quis, ut assumenda obcaecati eligendi velit nulla eos, numquam suscipit aliquid architecto, officia ducimus culpa consectetur doloremque repudiandae nobis magni corrupti in? Eius natus, molestiae accusamus totam harum cumque ipsa officiis at, eligendi iure explicabo fugit? Sapiente qui autem, illum itaque, ipsum modi placeat officia temporibus neque quos officiis. Hic molestias blanditiis ipsum optio reiciendis eum culpa adipisci at recusandae eos, quis in labore alias ",
  },
  {
    tittle: "Ways in which we obtain personal information",
    description:
      "We obtain personal information from you and from travel agents and others who book accommodation for you",
  },
  {
    tittle: "Categories of personal information",
    description:
      "Lorem ipsum dolor sit amet alias est sint voluptates tempore deleniti sapiente voluptate debitis. Dolore, corrupti. Officiis quas accusantium dolor ab, dolores obcaecati commodi, vel sed et accusamus cumque blanditiis saepe! Perferendis, sint tempora ab quo ipsam, excepturi dolores inventore fugit cumque tenetur sit obcaecati. Dolorum, earum vel? Illum deleniti dolorem nemo, fugit molestias possimus modi, delectus reprehenderit aspernatur saepe ab corporis eum alias ducimus tempore est! Accusamus corporis qui in explicabo assumenda obcaecati dolorem possimus iste eaque dicta mollitia, provident eum eius optio sapiente suscipit ex! Similique ex iste nesciunt consequatur esse atque quis, ut assumenda obcaecati eligendi velit nulla eos, numquam suscipit aliquid architecto, officia ducimus culpa consectetur doloremque repudiandae nobis magni corrupti in? Eius natus, molestiae accusamus totam harum cumque ipsa officiis at, eligendi iure explicabo fugit? Sapiente qui autem, illum itaque, ipsum modi placeat officia temporibus neque quos officiis. Hic molestias blanditiis ipsum optio reiciendis eum culpa adipisci at recusandae eos, quis in labore alias dolores, dolor modi similique consequatur magnam cumque illum!",
  },
  {
    tittle:
      "Purposes and lawful grounds of our processing personal information",
    description:
      "suscipit aliquid architecto, officia ducimus culpa consectetur doloremque repudiandae nobis magni corrupti in? Eius natus, molestiae accusamus totam harum cumque ipsa officiis at, eligendi iure explicabo fugit? Sapiente qui autem, illum itaque, ipsum modi placeat officia temporibus neque quos officiis. Hic molestias blanditiis ipsum optio reiciendis eum culpa adipisci at recusandae eos, quis in labore alias .",
  },
  {
    tittle: "Legitimate interests",
    description:
      "excepturi dolores inventore fugit cumque tenetur sit obcaecati. Dolorum, earum vel? Illum deleniti dolorem nemo, fugit molestias possimus modi, delectus reprehenderit aspernatur saepe ab corporis eum alias ducimus tempore est! Accusamus corporis qui in explicabo assumenda obcaecati dolorem possimus iste eaque dicta mollitia, provident eum eius optio sapiente suscipit ex! Similique ex iste nesciunt consequatur esse atque quis, ut assumenda obcaecati .",
  },
  {
    tittle: "Marketing and Preferences",
    description:
      "dignissimos doloribus illo et commodi aut at eveniet, provident quos, quo sit, hic praesentium. Qui minima aliquid eum at praesentium quod neque, veritatis laudantium odit doloribus amet error vitae alias est sint voluptates tempore deleniti sapiente voluptate debitis. Dolore, corrupti. Officiis quas accusantium dolor ab, dolores obcaecati commodi, vel sed et accusamus cumque blanditiis saepe! Perferendis, sint tempora ab quo ipsam, excepturi dolores inventore fugit ",
  },
  {
    tittle: "Retention period",
    description:
      "dignissimos doloribus illo et commodi aut at eveniet, provident quos, quo sit, hic praesentium. Qui minima aliquid eum at praesentium quod neque, veritatis laudantium odit doloribus amet error vitae alias est sint voluptates tempore deleniti sapiente voluptate debitis. Dolore, corrupti. Officiis quas accusantium dolor ab, dolores obcaecati commodi, vel sed et accusamus cumque blanditiis saepe! Perferendis, sint tempora ab quo ipsam, excepturi dolores inventore fugit ",
  },
  {
    tittle: "Your rights",
    description:
      "dignissimos doloribus illo et commodi aut at eveniet, provident quos, quo sit, hic praesentium. Qui minima aliquid eum at praesentium quod neque, veritatis laudantium odit doloribus amet error vitae alias est sint voluptates tempore deleniti sapiente voluptate debitis. Dolore, corrupti. Officiis quas accusantium dolor ab, dolores obcaecati commodi, vel sed et accusamus cumque blanditiis saepe! Perferendis, sint tempora ab quo ipsam, excepturi dolores inventore fugit ",
  },
];
const TermConditon = () => {
  return (
    <>
      <Header />
      <InfoCard
        key={Math.random()}
        array={Array}
        tittle={"Terms and conditions"}
      />
      <Footer2 />
    </>
  );
};
export default TermConditon;
