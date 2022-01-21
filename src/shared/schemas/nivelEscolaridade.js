import {object} from 'yup'

import niveisEscolaridade from '../data/niveisEscolaridade'

export default object().oneOf(niveisEscolaridade)
