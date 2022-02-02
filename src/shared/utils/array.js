import {concat} from 'lodash/array'

const withFirstItem = (items) =>
  concat(
    [
      {
        label: 'Selecione...',
        value: '',
      },
    ],
    items
  )

export {withFirstItem}
