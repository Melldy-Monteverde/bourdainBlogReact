import "./Main.css";
import Timelines from "./Timelines/Timelines";
import Quotes from "./Quotes/Quotes";
const Main = () => {
  return (
    <main className="main">
      <figure className="img-container">
        <img
          src="https://www.gentleman.excelsior.com.mx/wp-content/uploads/2019/06/ok.bourdainFB.jpg"
          alt="Anthony Bourdain"
          className="hero-img"
        />
        <figcaption className="fig-caption">
          The Original gastronomy Rockstar.
        </figcaption>
      </figure>
      <Timelines />
      <Quotes />
      <section className="external-references">
        <h3>
          If you have time, you should read more about this incredible human
          being on his{" "}
          <a
            href="https://es.wikipedia.org/wiki/Anthony_Bourdain"
            className="reference-link"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia entry{" "}
          </a>
          or his{" "}
          <a
            href="https://www.instagram.com/anthonybourdain/?hl=es"
            rel="noreferrer"
            target="_blank"
            className="reference-link"
          >
            Instagram
          </a>
        </h3>
      </section>
    </main>
  );
};

export default Main;
