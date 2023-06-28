import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrongPage from "./pages/WrongPage";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<WrongPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users/:id" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
