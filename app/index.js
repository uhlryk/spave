import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./App";
import style from "./sass/style.scss";  // eslint-disable-line


render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const App = require("./App"); // eslint-disable-line
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
