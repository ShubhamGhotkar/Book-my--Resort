import "./main-style.css";

const Main = ({ h1, p, button }) => {
  return (
    <>
      <main id="main-container">
        <span id="portal">
          <h1 id="portal-h1">{h1}</h1>
          <p id="portal-p">{p}</p>
          <button id="portal-btn">{button}</button>
        </span>
      </main>
    </>
  );
};

export default Main;
