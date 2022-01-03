import * as yup from 'yup'

import email from '../../shared/schemas/email'

export const signInSchema = yup.object({
  email: email.required(),
  senha: yup.string().min(8).max(20).required(),
})
