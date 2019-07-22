import React from "react";
import { Route, Switch } from "react-router-dom";
import authRoutes from "../Routes/authRoutes";
import Header from "../Header/Loadable";
import StyledAuthPage from './styled/StyledAuthPage';
import ConnectedHeader from "../ConnectedHeader";

class AuthPages extends React.Component {
  render() {
    return (
      <StyledAuthPage>
        <ConnectedHeader />
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
      </StyledAuthPage>
    );
  }
}

export default AuthPages;
