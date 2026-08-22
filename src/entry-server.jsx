import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

export function render(url, context = {}) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ThemeProvider>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
  return { html };
}
