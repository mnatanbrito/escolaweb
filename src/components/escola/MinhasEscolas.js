import React from 'react'

import ListaEscolas from './ListaEscolas'
import Panel from '../../shared/components/Panel'

const MinhasEscolas = () => {
  return (
    <>
      <Panel title="Minhas escolas">
        <ListaEscolas />
      </Panel>
    </>
  )
}

export default MinhasEscolas
