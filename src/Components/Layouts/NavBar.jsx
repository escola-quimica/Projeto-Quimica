import { Link } from "react-router-dom";
// import { BsList } from "react-icons/bs";

import EscolaQuimicaLogo from "../imgs/logoQuimica.jpeg";

import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
      {/* <div className="mobile">
        <BsList className="listMobile"/>
      </div> */}

      <nav>
        <div className="logo">
          <Link to={"/"}>
            <img src={EscolaQuimicaLogo} alt="foto da logo" />
          </Link>
        </div>

        <ul>
          <li>
            <Link to={"/membros"}>Membros </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
