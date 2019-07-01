import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/Loadable";
import { routes } from "../Routes/routeHelper";

const Pages = () =>{
  <Switch>
    <Route path={routes.HOME} component={HomePage} />
  </Switch>
);

export default Pages;