import "babel-polyfill";
import React from "react";
import { Provider, Route } from "react-redux";
import { routerMiddleware, ConnectedRouter, push } from "react-router-redux";
import reducer from "./reducers/index.js";
import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "./middlewares/thunk";
import AppRouter from "./AppRouter.jsx";

class App extends React.Component {
  static propsTypes = {
    history: React.PropTypes.object,
    config: React.PropTypes.object,
    initialState: React.PropTypes.object
  };
  constructor(props) {
    super(props);
    this.store = createStore(
      reducer,
      this.props.initialState,
      compose(
        applyMiddleware(thunk.createThunk(console), routerMiddleware(this.props.history)),
        devToolsEnhancer()
      )
    );
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.props.history} >
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
