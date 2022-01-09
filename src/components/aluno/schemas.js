import {object, string} from 'yup'

import dataPassada from '../../shared/schemas/dataPassada'
import dadosRg from '../../shared/schemas/dadosRg'
import cpf from '../../shared/schemas/cpf'
import endereco from '../../shared/schemas/endereco'

export const cadastroAluno = object().shape({
  nome: string().required().nullable(false),
  dataNascimento: dataPassada.nullable(false).required(),

  nacionalidade: string().nullable(true),
  naturalidade: string().nullable(true),

  dadosRg: dadosRg.notRequired().nullable(true),

  cpf: cpf.nullable(false).required(),

  endereco: endereco.required(),
})
