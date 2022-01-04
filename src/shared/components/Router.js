import React, {Suspense} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import BaseLayout from './BaseLayout'
import SplashScreen from '../../components/auth/SplashScreen'

/**
 * Lazy loaded routes
 */
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
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/escolas/:id" element={<DashboardEscola />} />
            <Route path="/alunos/cadastro" element={<CadastroAluno />} />

            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
