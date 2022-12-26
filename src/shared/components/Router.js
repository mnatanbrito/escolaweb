import React, {Suspense} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import useEnv from '../hooks/useEnv'
import BaseLayout from './BaseLayout'
import SplashScreen from '../../components/auth/SplashScreen'
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
const PesquisaAluno = React.lazy(() =>
  import('../../components/aluno/PesquisaAluno')
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
            <Route path="/alunos/pesquisa" element={<PesquisaAluno />} />
            {isDev && <Route path="/produtos" element={<CadastroProdutos />} />}

            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
