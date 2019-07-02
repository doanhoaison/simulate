import React from "react";
import { Route, Switch } from "react-router-dom";
import authRoutes from "../Routes/authRoutes";
import Header from "../Header/Loadable";

class AuthPages extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {authRoutes.map((props, key) => {
            return (
              <Route
                path={props.path}
                key={key}
                render={routeProps => <props.component {...routeProps} />}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default AuthPages;
