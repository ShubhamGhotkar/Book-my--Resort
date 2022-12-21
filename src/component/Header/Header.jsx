import "./Header.css";
import Header_Name, { NavBar, ToggleButton } from "./Header_Name";
const Header = () => {
  return (
    <header id="header">
      <div className="header-div">
        <Header_Name h1="Book My" u="Resort" />
        <NavBar />
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
