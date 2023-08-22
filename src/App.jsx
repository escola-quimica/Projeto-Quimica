import { BrowserRouter as Router } from "react-router-dom";
// LAYOUTS
import NavBar from "./Components/Layouts/NavBar";
import Container from "./Components/Layouts/Container";
import RoutesApp from "./Components/Layouts/Routes";
// CSS
import "./App.css";
import Footer from "./Components/Layouts/Footer";

function App() {
  return (
    <Router>
      <nav>
        <NavBar />
        <Container customClass="min-height max-width">
          <RoutesApp />
        </Container>
      </nav>

      <Footer />
    </Router>
  );
}

export default App;