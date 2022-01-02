import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./hooks/themeHook/themeContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
serviceWorkerRegistration.register();
