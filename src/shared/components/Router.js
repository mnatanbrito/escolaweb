import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../../components/dashboard/Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect path="*" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}
