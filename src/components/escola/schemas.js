import * as Yup from 'yup'
import {Timestamp} from 'firebase/firestore'

import {requiredString} from '../../shared/schemas/strings'
import endereco from '../../shared/schemas/endereco'
import estados from '../../shared/data/estados'

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
    dataCriacao: Timestamp.fromDate(new Date()),
    ativa: true,
  }
}
