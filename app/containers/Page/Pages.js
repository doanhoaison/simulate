import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/Loadable";
import Header from "../Header";
import { routes } from "../Routes/routeHelper";

import StyledPage from './styled/StyledPage';

const Pages = () => {
  console.log("Page/Pages.js");
  return (
    <StyledPage>
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
      </Switch>
    </StyledPage>
  );
};

export default Pages;
