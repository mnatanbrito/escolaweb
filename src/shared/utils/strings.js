/* eslint-disable no-useless-escape */
export const formatDisplayName = (displayName) => {
  if (!displayName) {
    return ''
  }

  const parts = displayName.split(' ')

  return `${parts[0]} ${parts.pop()}`
}

export const removeNonDigits = (str) => {
  return (str || '').replace(/\D*/g, '')
}

export const maskCpf = (cpf = '') => {
  return (cpf || '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const unmaskCpf = (cpf) => {
  return removeNonDigits(cpf)
}

export const slugify = (str) => {
  if (!str) {
    throw new Error('str não informada')
  }

  return str
    .toString() // Cast to string (optional)
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}
