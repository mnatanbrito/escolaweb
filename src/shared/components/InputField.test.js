import React from 'react';
import { cleanup, screen } from '@testing-library/react';

import { renderFormContext } from '../utils/tests';

import InputField from './InputField';
import emailSchema from '../schemas/email';

describe('InputField', () => {
  afterEach(cleanup);

  it('Deve renderizar sem erros', () => {
    renderFormContext(
      () => <InputField name="email" title="email" />,
      emailSchema
    );

    expect(screen.getByTitle('email')).toBeInTheDocument();
  });

  it('Não deve possuir mensagem de erro quando o usuário não interagir com o campo', () => {
    renderFormContext(
      () => <InputField name="email" title="email" />,
      emailSchema
    );

    expect(screen.queryAllByTestId('email-error')).toHaveLength(0);
  });
});
