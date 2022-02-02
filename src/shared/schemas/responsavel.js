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

  dadosRg: dadosRg.notRequired().nullable(true),

  nivelEscolaridade: nivelEscolaridade.nullable(true),
  profissao: string().nullable(true),

  enderecoTrabalho: endereco.nullable(true),
  dadosContato: dadosContato.required(),
})

export const defaultValues = {
  nome: '',
  falecido: false,

  nacionalidade: null,
  naturalidade: null,

  dadosRg: null,

  nivelEscolaridade: null,
  profissao: null,

  enderecoTrabalho: null,
  dadosContato: '',
}
