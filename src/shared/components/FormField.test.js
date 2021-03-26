import React from 'react';
import { cleanup, screen } from '@testing-library/react';

import { renderFormContext } from '../utils/tests';

import FormField from './FormField';
import emailSchema from '../schemas/email';

describe('FormField', () => {
  afterEach(cleanup);

  it('Deve renderizar sem erros', () => {
    renderFormContext(
      () => <FormField name="email" title="email" />,
      emailSchema
    );

    expect(screen.getByTitle('email')).toBeInTheDocument();
  });

  it('Não deve possuir mensagem de erro quando o usuário não interagir com o campo', () => {
    renderFormContext(
      () => <FormField name="email" title="email" />,
      emailSchema
    );

    expect(screen.queryAllByTestId('email-error')).toHaveLength(0);
  });
});
