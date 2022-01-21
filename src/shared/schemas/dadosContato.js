import {object, string} from 'yup'

import tiposDadoContato from '../data/tiposDadoContato'
import telefone from './telefone'
import email from './email'

export default object().shape({
  tipo: string().oneOf(tiposDadoContato),
  numero: telefone.nullable(true),
  email: email.nullable(true),
})
