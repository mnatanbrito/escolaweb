import * as Yup from 'yup'

import endereco from '../../shared/schemas/endereco'
import dataNascimento from '../../shared/schemas/dataNascimento'

export const cadastroAluno = Yup.object().shape({
  nome: Yup.string().required().nullable(false),
  dataNascimento: dataNascimento.required(),
  naturalidade: Yup.string().required(),
  endereco: endereco.required(),
})
