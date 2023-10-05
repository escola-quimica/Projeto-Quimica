import { Routes, Route } from "react-router-dom";
//PAGES
import Home from "../Pages/Home";
import Membros from "../Pages/Membros";
import Software from "../Pages/Software";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/membros" element={<Membros />} />
      <Route exact path="/software" element={<Software />} />
    </Routes>
  );
};

export default RoutesApp;
