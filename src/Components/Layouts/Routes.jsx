import { Routes, Route } from "react-router-dom";
//PAGES
import Home from "../Pages/Home";
import Membros from "../Pages/Membros";

const RoutesApp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/membros" element={<Membros />} />
    </Routes>
  );
};

export default RoutesApp;
