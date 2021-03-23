import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import DashboardEscola from '../../components/escola/Dashboard';
import Dashboard from '../../components/dashboard/Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/escolas/:id" component={DashboardEscola} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect path="*" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}
