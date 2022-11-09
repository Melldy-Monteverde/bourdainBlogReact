import "./Quotes.css";

const Quotes = () => {
  return (
    <div>
      <blockquote cite="http://news.rediff.com/report/2009/sep/14/pm-pays-tribute-to-father-of-green-revolution-borlaug.htm">
        <p>
          "Plastic stools, cheap but delicious noodles, and Hanoi beer. This is
          how I remember Tony. He gave us a lesson about food and, most
          importantly, his ability to bring us all together. He taught us not to
          fear the unknown. We will miss him."
        </p>
      </blockquote>
      <blockquote>
        <p>
          "Life is complicated. It is full of nonsense. It is unsatisfactory ...
          If I believe in something it is in doubt. The root of all life's
          problems is the search for a simple damn answer."
        </p>
      </blockquote>
      <cite>-- Anthony Bourdain</cite>
    </div>
  );
};

export default Quotes;
