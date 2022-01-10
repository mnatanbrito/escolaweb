import {object, string} from 'yup'

import dataPassada from '../../shared/schemas/dataPassada'
import dadosRg from '../../shared/schemas/dadosRg'
import cpf from '../../shared/schemas/cpf'
import endereco from '../../shared/schemas/endereco'

export const cadastroAluno = object().shape({
  nome: string().nullable(false),
  dataNascimento: dataPassada.nullable(false),

  nacionalidade: string().nullable(true),
  naturalidade: string().nullable(true),

  dadosRg: dadosRg.nullable(true),

  cpf: cpf.nullable(false).required(),

  endereco: endereco.nullable(true),
})

export const defaultNovoAluno = {
  nome: '',
  dataNascimento: '',

  nacionalidade: '',
  naturalidade: '',

  // dadosRg: {
  //   rg: '',
  //   orgaoEmissor: '',
  //   dataEmissao: '',
  // },

  cpf: '',

  // endereco: {
  //   numero: '',
  //   rua: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: {
  //     nome: 'Maranhão',
  //     sigla: 'MA',
  //   },
  // },
}
