import {string} from 'yup'

/**
 * This will mark the null as a missing value instead of an invalid type.
 */
export const requiredString = string().required().nullable(true)

export const nonRequiredString = string().notRequired().nullable(true)
