import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Animation from "./Animation/Animation";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Animation />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function

reportWebVitals();
