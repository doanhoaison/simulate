/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import Header from "containers/Header/Loadable";
import indexRoutes from "../Routes/index";
import GlobalStyle from "../../global-styles";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function App() {

  return (
    <AppWrapper>
      <Switch>
        {indexRoutes.map((props, key) => {
          console.log('app/App/index.js', props.component);
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
    </AppWrapper>
  );
}
