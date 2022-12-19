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
