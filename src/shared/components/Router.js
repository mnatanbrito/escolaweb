import React, {Suspense} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import BaseLayout from './BaseLayout'
import SplashScreen from '../../components/auth/SplashScreen'
import useEnv from '../hooks/useEnv'
import Dashboard from '../../components/dashboard/Dashboard'

/**
 * Lazy loaded routes
 */
const DashboardEscola = React.lazy(() =>
  import('../../components/escola/Dashboard')
)
const CadastroAluno = React.lazy(() =>
  import('../../components/aluno/CadastroAluno')
)
const CadastroProdutos = React.lazy(() => import('./ProdutoForm'))

export default function Router() {
  const {isDev} = useEnv()
  return (
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/escolas/:slug" element={<DashboardEscola />} />
            <Route path="/alunos/cadastro" element={<CadastroAluno />} />
            {isDev && <Route path="/produtos" element={<CadastroProdutos />} />}

            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
