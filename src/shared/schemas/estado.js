import * as yup from 'yup';

import estados from '../data/estados';

export default yup.object().shape({
  nome: yup
    .string()
    .oneOf(estados.map((estado) => estado.nome))
    .required(),
  sigla: yup
    .string()
    .oneOf(estados.map((estado) => estado.sigla))
    .required(),
});
