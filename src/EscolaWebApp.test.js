import React from 'react'
import {render, cleanup, screen} from '@testing-library/react'

import EscolaWebApp from './EscolaWebApp'

describe('EscolaWebApp', () => {
  afterEach(() => {
    cleanup()
  })

  test('Should render successfully', () => {
    render(<EscolaWebApp />)

    expect(screen.getByText(/Carregando/)).not.toBeNull()
  })
})
