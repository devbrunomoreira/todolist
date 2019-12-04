import React from 'react';
import Login from '../components/Login/Login';
import Cards from '../components/Cards/Cards'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Cards} />
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;