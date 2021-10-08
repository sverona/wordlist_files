import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import WordView from "./WordView.jsx";

const NotFound = () => <h1>404</h1>;

export default function Contents() {
  return (
    <Switch>
      <Route path="/word" component={WordView} />
      <Route component={NotFound} />
    </Switch>
  );
}
