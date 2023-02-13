import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import LanguageWrapper from "./I18n/LanguageWrapper";
import { ThemeProvider } from "./hooks/themeHook/themeContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import AnimatedPointer from "./components/Animation/CursorAnimation";

const Root = () => {
  return (
    <ThemeProvider>
      <LanguageWrapper>
        <BrowserRouter>
          <App />
          <AnimatedPointer />
        </BrowserRouter>
      </LanguageWrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
serviceWorkerRegistration.register();
