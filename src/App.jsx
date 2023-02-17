import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <CookieConsent
        location="bottom"
        placeholder="asdas"
        cookieName="myAwesomeCookieName3"
        expires={9999}
        overlay
      >
        This website uses cookies to enhance the user experience!! 🍪
      </CookieConsent>
    </BrowserRouter>
  );
}

export default App;
