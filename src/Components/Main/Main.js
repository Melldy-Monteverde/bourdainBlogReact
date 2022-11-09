import "./Main.css";
import Timelines from "./Timelines/Timelines";

const Main = () => {
  return (
    <main className="main">
      <figure className="img-container">
        <img
          src="https://www.gentleman.excelsior.com.mx/wp-content/uploads/2019/06/ok.bourdainFB.jpg"
          alt="Anthony Bourdain"
          id="image"
        />
        <figcaption className="fig-caption">
          The Original gastronomy Rockstar.
        </figcaption>
      </figure>
      <Timelines />
    </main>
  );
};

export default Main;
