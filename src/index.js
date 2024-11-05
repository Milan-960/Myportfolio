import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import LanguageWrapper from "./I18n/LanguageWrapper";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { DarkModeProvider } from "./hooks/themeHook/darkMode-Context";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import AnimatedPointer from "./components/Animation/CursorAnimation"; // Restore AnimatedPointer

import { Analytics } from "@vercel/analytics/react";

const Root = () => {
  return (
    <Provider store={store}>
      <DarkModeProvider>
        <LanguageWrapper>
          <BrowserRouter>
            <App />
            {/* <AnimatedPointer /> */}
          </BrowserRouter>
          <Analytics />
        </LanguageWrapper>
      </DarkModeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
serviceWorkerRegistration.register();
