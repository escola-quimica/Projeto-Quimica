import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { useState } from "react";

import EscolaQuimicaLogo from "../../assets/imgs/logoQuimica.jpeg";

import "./Navbar.css";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="mobile">
          <BsList className="listMobile" onClick={toggleMobileMenu} />
        </div>

        <div className="logo">
          <Link to={"/"}>
            <img src={EscolaQuimicaLogo} alt="foto da logo" />
          </Link>
        </div>

        <ul className={mobileMenuOpen ? "mobile-menu-open" : "mobile-menu"}>
          <li>
            <Link to={"/membros"}>Membros</Link>
          </li>
          <li>
            <Link to={"/software"}>Softwares</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
