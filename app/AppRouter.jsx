import React from "react";
import { Route } from "react-router";

import MainMenu from "./components/MainMenu";

class AppRouter extends React.Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={MainMenu} />
      </div>
    );
  }
}
export default AppRouter;
