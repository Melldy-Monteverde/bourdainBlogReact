import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Melldy-Monteverde"
        className="contact-link git-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/melldy-monteverde-b19390190/"
        className="contact-link linkedin-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <span className="react-icon">
        Made with - <FaReact />
      </span>
    </footer>
  );
};

export default Footer;
