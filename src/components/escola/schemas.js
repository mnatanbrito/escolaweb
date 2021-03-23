import * as Yup from 'yup';

export const cadastroEscola = Yup.object().shape({
  nome: Yup.string().required().nullable(false),
});
