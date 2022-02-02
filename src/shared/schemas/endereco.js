import {string, object, number} from 'yup'

import estado from './estado'

export default object().shape({
  rua: string().required(),
  bairro: string().required(),
  numero: number().nullable(true),

  complemento: string().nullable(true),
  
  cidade: string().required(),
  estado: estado.required(),
})
