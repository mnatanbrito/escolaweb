import {string} from 'yup'
import {map} from 'lodash/collection'

import estados from '../data/estados'

export default string().oneOf(map(estados, (estado) => estado.sigla))
