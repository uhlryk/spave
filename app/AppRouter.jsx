import React from "react";
import { Route } from "react-router";

import MainMenu from "./components/mainMenu/MainMenu";
import SelectShip from "./components/selectShip/SelectShip";

class AppRouter extends React.Component {
  render() {
    return (
      <div id="router">
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/select-ship" component={SelectShip} />
      </div>
    );
  }
}
export default AppRouter;
