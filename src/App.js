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
    </BrowserRouter>
  );
}

export default App;
