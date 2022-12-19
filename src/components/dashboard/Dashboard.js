import React from 'react'

import ContentLayout from '../../shared/components/ContentLayout'
import MinhasEscolas from '../escola/MinhasEscolas'
import AlunosSemEscola from '../aluno/AlunosSemEscola'
import MenuRapido from './MenuRapido'

export default function Dashboard() {
  return (
    <ContentLayout title="Dashboard">
      <MenuRapido />
      <MinhasEscolas />
      <AlunosSemEscola />
    </ContentLayout>
  )
}
