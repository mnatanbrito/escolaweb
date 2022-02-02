import {object, string} from 'yup'
import {map} from 'lodash/collection'

import tiposDadoContato from '../data/tiposDadoContato'
import telefone from './telefone'
import email from './email'

export default object().shape({
  tipo: string().oneOf(map(tiposDadoContato, ({value}) => value)),
  numero: telefone.nullable(true),
  email: email.nullable(true),
})
