import {object, string, bool} from 'yup'

import dadosRg from './dadosRg'
import nivelEscolaridade from './nivelEscolaridade'
import endereco from './endereco'
import dadosContato from './dadosContato'

export default object().shape({
  nome: string().required(),
  falecido: bool().required(),

  nacionalidade: string().nullable(true),
  naturalidade: string().nullable(true),

  dadosRg: dadosRg.nullable(true),

  nivelEscolaridade,
  profissao: string().required(),

  enderecoTrabalho: endereco.nullable(true),
  dadosContato: dadosContato.nullable(true),
})
