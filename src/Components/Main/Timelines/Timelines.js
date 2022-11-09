import "./Timelines.css";
import Data from "../data/data.json";

const Timelines = () => {
  return (
    <section className="timeline-container">
      <h3 className="timeline-title">
        Here's a time line of Chef Anthony boudain:
      </h3>
      <ul className="timeline__ul">
        {Data &&
          Data.map((el) => {
            return (
              <li key={el.id} className="timeline__li">
                <strong>{el.date}</strong> - {el.text}
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Timelines;
