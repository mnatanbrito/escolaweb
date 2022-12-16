import {string, object, number} from 'yup'
import estados from '../data/estados'

import estado from './estado'

export default object().shape({
  rua: string().required(),
  bairro: string().required(),
  numero: number().notRequired(),
  complemento: string().notRequired(),
  cidade: string().required(),
  estado: estado.required().default(estados[0].sigla),
})
