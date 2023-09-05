import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerUpper">
        <div className="logoFooter">
          <Link to={"/"}>
            <p>Escola de Química Computacional</p>
          </Link>
        </div>

        <div className="linksIcons">
          <a href=" https://www.youtube.com/@QuimicaComputacional/featured">
            <BsYoutube />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <AiFillFacebook />
          </a>
        </div>
      </div>

      <div className="contact-info">
        <h1>Contato</h1>
        <span>Email: escoladequimicacomputacional@gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
