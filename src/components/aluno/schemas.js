import {object, string, boolean} from 'yup'
import {Timestamp} from 'firebase/firestore'

import {requiredString, nonRequiredString} from '../../shared/schemas/strings'
import dataNascimento from '../../shared/schemas/dataNascimento'
import dadosRg from '../../shared/schemas/dadosRg'
import cpf from '../../shared/schemas/cpf'
import endereco from '../../shared/schemas/endereco'
import corPele from '../../shared/data/corPele'
import email from '../../shared/schemas/email'
import estados from '../../shared/data/estados'
import {parseDate} from '../../shared/utils/dates'

export const cadastroAluno = object().shape({
  nome: requiredString,
  dataNascimento: dataNascimento.required().nullable(true),
  nacionalidade: nonRequiredString,
  naturalidade: nonRequiredString,
  dadosRg: dadosRg.nullable(true),
  cpf: cpf.required().nullable(true),
  email: email.notRequired().nullable(true),
  corPele: string()
    .notRequired()
    .nullable(true)
    .oneOf(corPele.map((cor) => cor.toLowerCase())),
  bolsaFamilia: boolean().notRequired().nullable(true),
  usaTransportePublico: boolean().notRequired().nullable(true),
  necessidadesEducacionaisEspeciais: boolean().required().nullable(true),
  endereco: endereco.required().nullable(true),
})

// TODO: use the proper firestore sdk mechanism for these conversions
export const converter = (dadosAluno) => {
  return {
    ...dadosAluno,
    dataNascimento: Timestamp.fromDate(parseDate(dadosAluno.dataNascimento)),
    dadosRg: {
      ...dadosAluno.dadosRg,
      dataEmissao: Timestamp.fromDate(
        parseDate(dadosAluno.dadosRg.dataEmissao)
      ),
    },
    corPele: Boolean(dadosAluno.corPele),
    bolsaFamilia: Boolean(dadosAluno.bolsaFamilia),
    usaTransportePublico: Boolean(dadosAluno.usaTransportePublico),
    necessidadesEducacionaisEspeciais: Boolean(
      dadosAluno.necessidadesEducacionaisEspeciais
    ),
  }
}

export const defaultNovoAluno = {
  nome: null,
  dataNascimento: null,
  nacionalidade: null,
  naturalidade: null,
  dadosRg: null,
  cpf: null,
  email: null,
  corPele: undefined,
  bolsaFamilia: null,
  usaTransportePublico: null,
  necessidadesEducacionaisEspeciais: null,
  endereco: {
    rua: null,
    bairro: null,
    numero: null,
    complemento: null,
    cidade: null,
    estado: estados[0].sigla,
  },
}
