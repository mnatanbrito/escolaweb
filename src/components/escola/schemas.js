import * as Yup from 'yup'
import {Timestamp} from 'firebase/firestore'

import {requiredString} from '../../shared/schemas/strings'
import endereco from '../../shared/schemas/endereco'
import estados from '../../shared/data/estados'
import {slugify} from '../../shared/utils/strings'

export const cadastroEscola = Yup.object().shape({
  nome: requiredString,
  endereco: endereco.required().nullable(true),
})

export const defaultCadastroEscola = {
  nome: null,
  endereco: {
    rua: null,
    bairro: null,
    numero: null,
    complemento: null,
    cidade: null,
    estado: estados[0].sigla,
  },
}

export const converter = (escola) => {
  return {
    ...escola,
    slug: slugify(escola.nome),
    dataCriacao: Timestamp.fromDate(new Date()),
    ativa: true,
  }
}
