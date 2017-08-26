import React from "react";
import { Route } from "react-router";

import MainMenu from "./components/mainMenu/MainMenu";
import ProfessionSelection from "./components/professionSelection/ProfessionSelection";

class AppRouter extends React.Component {
  render() {
    return (
      <div id="router">
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/choose-profession" component={ProfessionSelection} />
      </div>
    );
  }
}
export default AppRouter;
