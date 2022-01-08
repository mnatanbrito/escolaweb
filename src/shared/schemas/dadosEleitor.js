import {string, object} from 'yup'

export default object().shape({
  numero: string().required(),
  zona: string().required(),
  secao: string().required(),
})
