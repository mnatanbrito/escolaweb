import * as Yup from 'yup';

import endereco from '../../shared/schemas/endereco';

export const cadastroEscola = Yup.object().shape({
  nome: Yup.string().required().nullable(false),
  endereco,
});
