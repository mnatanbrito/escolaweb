import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import DashboardEscola from '../../components/escola/Dashboard';
import Dashboard from '../../components/dashboard/Dashboard';
import BaseLayout from './BaseLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <BaseLayout>
          <Route path="/escolas/:id" component={DashboardEscola} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect path="*" to="/dashboard" />
        </BaseLayout>
      </Switch>
    </BrowserRouter>
  );
}
