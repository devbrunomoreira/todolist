import React from 'react';
import { useSelector } from 'react-redux';
import {
 BrowserRouter, Route, Switch, Redirect 
} from 'react-router-dom';
import Login from '../components/Login/Login';
import Cards from '../components/Cards/Cards';
import firebase from '../firebase';

function isAuthenticated() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      return true;
    }
    return false;
  });
}

const PrivateRoute = ({ component: Component, path, exact }) => {
  const authenticated = isAuthenticated();
  console.log('true or false', authenticated);
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Cards} authenticated />
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
