import * as yup from 'yup';

export default yup.object().shape({
  numero: yup.number().required().nullable(true),
  rua: yup.string().required(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
});
