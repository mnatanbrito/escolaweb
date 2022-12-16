import {object, string} from 'yup'

import endereco from './endereco'
import dadosContato from './dadosContato'

export default object().shape({
  nome: string().required(),
  nacionalidade: string().optional(),
  naturalidade: string().optional(),
  profissao: string().optional(),
  endereco: endereco.required(),
  contato: dadosContato.required(),
})

export const defaultValues = {
  nome: null,
  nacionalidade: null,
  naturalidade: null,
  profissao: null,
  endereco: null,
  contato: null,
}
