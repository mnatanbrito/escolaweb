import * as yup from 'yup'

import estado from './estado'

export default yup.object().shape({
  numero: yup.number().required().nullable(true),
  rua: yup.string().required(),
  bairro: yup.string().required(),
  cidade: yup.string().required(),
  estado: estado.required(),
})
