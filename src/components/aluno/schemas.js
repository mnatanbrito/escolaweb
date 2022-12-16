import {object, string, array, boolean} from 'yup'

import {requiredString, nonRequiredString} from '../../shared/schemas/strings'
import dataNascimento from '../../shared/schemas/dataNascimento'
import dadosRg from '../../shared/schemas/dadosRg'
import cpf from '../../shared/schemas/cpf'
import endereco from '../../shared/schemas/endereco'
import pai from '../../shared/schemas/pai'
import responsavel from '../../shared/schemas/responsavel'
import corPele from '../../shared/data/corPele'
import email from '../../shared/schemas/email'

export const cadastroAluno = object().shape({
  /* dados do aluno */
  nome: requiredString,
  dataNascimento: dataNascimento.required().nullable(true),
  nacionalidade: nonRequiredString,
  naturalidade: nonRequiredString,
  dadosRg: dadosRg.nullable(true),
  cpf: cpf.nullable(false).required(),
  email: email.notRequired(),
  corPele: string()
    .oneOf(corPele.map((cor) => cor.toLowerCase()))
    .notRequired()
    .nullable(true),
  bolsaFamilia: boolean().notRequired().nullable(true),
  usaTransportePublico: boolean().notRequired().nullable(true),
  necessidadesEducacionaisEspeciais: boolean().notRequired().nullable(true),
  endereco: endereco.required().nullable(true),

  /* pais e responsaveis */
  // pais: array(pai),
  // responsavel: responsavel.when('pais', {
  //   is: (pais) => (pais || []).length === 0,
  //   then: (schema) => schema.required(),
  //   otherwise: (schema) => schema.notRequired().nullable(true),
  // }),
})

export const defaultNovoAluno = {
  nome: null,
  dataNascimento: null,
  nacionalidade: null,
  naturalidade: null,
  dadosRg,
  cpf: '',
  email: '',
  corPele: null,
  bolsaFamilia: null,
  usaTransportePublico: null,
  necessidadesEducacionaisEspeciais: null,
  endereco: null,
  pais: [],
  responsavel: null,
}
