import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>

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
