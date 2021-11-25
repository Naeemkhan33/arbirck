import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/home/HomePage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  );
};

export default Routes;
