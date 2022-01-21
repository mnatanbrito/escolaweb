import {object, string, array} from 'yup'

import dataPassada from '../../shared/schemas/dataPassada'
import dadosRg from '../../shared/schemas/dadosRg'
import cpf from '../../shared/schemas/cpf'
import endereco from '../../shared/schemas/endereco'
import pai from '../../shared/schemas/pai'
import responsavel from '../../shared/schemas/responsavel'

export const cadastroAluno = object().shape({
  /* dados do aluno */
  nome: string().nullable(false),
  dataNascimento: dataPassada.nullable(false),

  nacionalidade: string().nullable(true),
  naturalidade: string().nullable(true),

  dadosRg: dadosRg.nullable(true),

  cpf: cpf.nullable(false).required(),

  endereco: endereco.nullable(true),

  /* pais e responsaveis */
  pais: array(pai),

  responsaveis: array(responsavel).when('pais', {
    is: (pais) => (pais || []).length === 0,
    then: (schema) => schema.required().min(1),
    otherwise: (schema) => schema.notRequired().nullable(true),
  }),
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
