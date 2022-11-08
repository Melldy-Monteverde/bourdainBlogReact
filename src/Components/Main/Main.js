import "./Main.css";
import Timelines from "./Timelines/Timelines.js";

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
      <Timelines
        date={1956}
        text=" - Born in New York on June 25, 1956 and raised in Leonia , New Jersey "
      />
    </main>
  );
};

export default Main;
