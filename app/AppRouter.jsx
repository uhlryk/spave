import React from "react";
import { Route } from "react-router";

import MainMenu from "./components/mainMenu/MainMenu";

class AppRouter extends React.Component {
  render() {
    return (
      <div id="router">
        <Route exact path="/" component={MainMenu} />
      </div>
    );
  }
}
export default AppRouter;
