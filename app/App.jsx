import "babel-polyfill";
import React from "react";
import { Provider, Route } from "react-redux";
import { routerMiddleware, ConnectedRouter, push } from "react-router-redux";
import reducer from "./reducers/index.js";
import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "./middlewares/thunk";
import AppRouter from "./AppRouter.jsx";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(thunk.createThunk(console), routerMiddleware(history)),
    devToolsEnhancer()
  )
);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
