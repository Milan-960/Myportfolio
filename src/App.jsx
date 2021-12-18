import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import "./styles/main.scss";
import BaseRoutes from "./routes/BaseRoutes";
import Preloader from "./components/UIElements/Preloader/Preloader";

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
