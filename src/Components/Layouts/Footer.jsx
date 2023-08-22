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
          <a href="#">
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
        <p>Email: jaojoaojo@akakpkpak.com</p>
        <p>Telefone: 99999-99999</p>
      </div>
    </footer>
  );
};

export default Footer;
