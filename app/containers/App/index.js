/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Switch, Route } from "react-router-dom";

import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import indexRoutes from "../Routes/index";
import GlobalStyle from "../../global-styles";

export default function App() {

  return (
    <div className={'bg-white'}>
      <div className={'d-flex flex-column'}>
      <Switch>
        {indexRoutes.map((props, key) => {
          return (
            <Route
              path={props.path}
              component={props.component}
              key={key}
              exact={props.exact}
            />
          );
        })}

        <Route path=":/anything" component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
      </div>
    </div>
  );
}
