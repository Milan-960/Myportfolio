import * as React from "react";
import { renderToString } from "react-dom/server";
import { HeadProvider } from "react-head";
import App from "./App";

const headTags = []; // mutated during render so you can include in server-rendered template later
const app = renderToString(
  <HeadProvider headTags={headTags}>
    <App />
  </HeadProvider>
);

res.send(`
  <!doctype html>
    <head>
      ${renderToString(headTags)}
    </head>
    <body>
      <div id="root">${app}</div>
    </body>
  </html>
`);
