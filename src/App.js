import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Form from "./components/Form";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import Section from "./components/Section";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { Helmet } from "react-helmet";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Helmet>
          <title> Milan Sachani</title>
          <meta name="title" content="Milan Sachani" />
          <meta
            name="description"
            content="MS | Front End Developer | ReactJs - Hire Professional Freelancer &amp; ReactJs Developer. Building animations and interactive experiences, hi-end solutions, website maintenance &amp; security"
          />
          <meta property="og:title" content="Milan Sachani" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://milansportfolio.com/" />
        </Helmet>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
