import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import BaseRoutes from "./routes/BaseRoutes";
import Preloader from "./components/UIElements/Preloader/Preloader";
import "./styles/Globals.scss";

const App = () => {
  console.log("App");
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
