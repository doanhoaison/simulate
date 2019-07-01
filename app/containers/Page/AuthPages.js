/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line react/prefer-stateless-function
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import authRoutes from '../Routes/authRoutes';

class AuthPages extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {authRoutes.map((props, key) => (
            <Route
              path={props.path}
              key={key}
              render={routeProps => <props.component {...routeProps} />}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default AuthPages;
