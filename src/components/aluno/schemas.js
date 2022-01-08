import {object, string} from 'yup'

import endereco from '../../shared/schemas/endereco'
import dataPassada from '../../shared/schemas/dataPassada'
import dadosRg from '../../shared/schemas/dadosRg'

export const cadastroAluno = object().shape({
  nome: string().required().nullable(false),
  dataNascimento: dataPassada.nullable(false).required(),
  nacionalidade: string().nullable(true),
  naturalidade: string().nullable(true),

  dadosRg,

  endereco: endereco.required(),
})
