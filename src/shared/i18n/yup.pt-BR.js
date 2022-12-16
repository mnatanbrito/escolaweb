/* eslint-disable no-template-curly-in-string */
// import printValue from './yupUtils'

const i18n = {
  mixed: {
    default: '${path} é inválido',
    required: 'Campo obrigatório',
    oneOf: '${path} deve ser um dos seguintes valores: ${values}',
    notOneOf: '${path} não pode ser um dos seguintes valores: ${values}',
    notType: ({path, type, value, originalValue}) => {
      // let isCast = originalValue != null && originalValue !== value
      // let msg =
      //   `${path} must be a \`${type}\` type, ` +
      //   `but the final value was: \`${printValue(value, true)}\`` +
      //   (isCast
      //     ? ` (cast from the value \`${printValue(originalValue, true)}\`).`
      //     : '.')

      // if (value === null) {
      //   msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``
      // }

      // return msg
      return 'Valor inválido'
    },
    defined: '${path} deve estar definido',
  },
  string: {
    length: '${path} deve ter ${length} caracteres',
    min: '${path} deve ter no mínimo ${min} caracteres',
    max: '${path} deve ter no máximo ${max} caracteres',
    matches: '${path} deve seguir o padrão: "${regex}"',
    email: '${path} deve ser um email válido',
    url: '${path} deve ser uma URL válida',
    uuid: '${path} deve ser um UUID válido',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} deve estar em minúscula',
    uppercase: '${path} deve estar em maiúscula',
    dataInvalida: '${path} é uma data inválida',
    dataFuturo: '${path} é uma data no futuro',
    dataNascimento: 'Data de nascimento inválida'
  },
  number: {
    min: '${path} deve ser maior ou igual a ${min}',
    max: '${path} deve ser menor ou igual a ${max}',
    lessThan: '${path} deve ser menor que ${less}',
    moreThan: '${path} deve ser maior que ${more}',
    notEqual: '${path} não deve ser igual a ${notEqual}',
    positive: '${path} deve ser um número positivo',
    negative: '${path} deve ser um número negativo',
    integer: '${path} deve ser um número inteiro',
  },
  boolean: {},
  object: {
    noUnknown: '${path} possui chaves desconhecidas: ${unknown}',
  },
  date: {
    min: '${path} deve ser posterior a ${min}',
    max: '${path} deve ser anterior a ${max}',
  },
  array: {
    min: '${path} deve possuir pelo menos ${min} itens',
    max: '${path} deve possuir não mais que ${max} itens',
  },
}

export default i18n
