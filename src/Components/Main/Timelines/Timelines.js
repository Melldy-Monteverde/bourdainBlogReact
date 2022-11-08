import "./Timelines.css";

const Timelines = (props) => {
  return (
    <section className="timelines-container">
      <ul className="timelines__ul">
        <li className="timelines__li">
          {props.date}
          {props.text}
        </li>
        <li className="timelines__li">
          {props.date}
          {props.text}
        </li>
      </ul>
    </section>
  );
};

export default Timelines;
