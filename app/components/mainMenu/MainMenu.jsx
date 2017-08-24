import React from "react";

import style from "./mainMenu.scss";

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <div className="main-menu__background"></div>
        <div className="main-menu__grid">
          <div className="main-menu__title">deeper than life</div>
          <div className="main-menu__menu">
            <div className="main-menu__element main-menu__element--inactive">continue</div>
            <div className="main-menu__element">new game</div>
            <div className="main-menu__element">options</div>
            <div className="main-menu__element">exit</div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainMenu;
