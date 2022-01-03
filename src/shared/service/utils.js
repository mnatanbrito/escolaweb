export const unwrapData = (doc) => {
  if (doc.exists) {
    return doc.data()
  } else {
    throw new Error('Documento não existe!')
  }
}
