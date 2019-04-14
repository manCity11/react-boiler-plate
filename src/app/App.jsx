import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { APP_ROUTES } from "./app.route";
import store from "./store/store";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          {_.map(APP_ROUTES, (route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Provider>
    );
  }
}
