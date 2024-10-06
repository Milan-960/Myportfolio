import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import BaseRoutes from "./routes/BaseRoutes";
import Preloader from "./components/UIElements/Preloader/Preloader";
import "./styles/Globals.scss";
import ThreeJSAnimation from "./components/ThreeJSAnimation";

const App = () => {
  // const location = useLocation();
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <ThreeJSAnimation />
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
