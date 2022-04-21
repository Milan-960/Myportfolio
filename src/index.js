import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./hooks/themeHook/themeContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import AnimatedPointer from "./components/Animation/CursorAnimation";

const Root = () => {
  return (
    <ThemeProvider>
      <App />
      <AnimatedPointer />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
serviceWorkerRegistration.register();
