import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client"; // Use createRoot from react-dom/client
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import LanguageWrapper from "./I18n/LanguageWrapper";
import store from "./Store/Store";
import { DarkModeProvider } from "./hooks/themeHook/darkMode-Context";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import AnimatedPointer from "./components/Animation/CursorAnimation"; // Restore AnimatedPointer
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "./ErrorBoundary";

// Create the root container
createRoot(document.getElementById("root")).render(
  <React.Fragment>
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
  </React.Fragment>
);

reportWebVitals();
serviceWorkerRegistration.register();
