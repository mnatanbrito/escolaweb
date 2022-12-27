import React from 'react'

import ListaEscolas from './ListaEscolas'
import Panel from '../../shared/components/Panel'

const MinhasEscolas = ({ refresher }) => {
  return (
    <>
      <Panel title="Minhas escolas">
        <ListaEscolas refresher={refresher} />
      </Panel>
    </>
  )
}

export default MinhasEscolas
