import {string} from 'yup'
import {map} from 'lodash/collection'

import niveisEscolaridade from '../data/niveisEscolaridade'

export default string().oneOf(map(niveisEscolaridade, ({value}) => `${value}`))
