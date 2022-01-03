import React, {Suspense} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import BaseLayout from './BaseLayout'
import SplashScreen from '../../components/auth/SplashScreen'

const Dashboard = React.lazy(() =>
  import('../../components/dashboard/Dashboard')
)
const DashboardEscola = React.lazy(() =>
  import('../../components/escola/Dashboard')
)
const CadastroAluno = React.lazy(() =>
  import('../../components/aluno/CadastroAluno')
)

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <Switch>
          <BaseLayout>
            <Route path="/escolas/:id" component={DashboardEscola} />
            <Route path="/alunos/cadastro" component={CadastroAluno} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect path="*" to="/dashboard" />
          </BaseLayout>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
