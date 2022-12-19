export const unwrapData = (doc) => {
  if (doc.exists()) {
    return {
      id: doc.id,
      ...doc.data(),
    }
  } else {
    throw new Error('Documento não existe!')
  }
}

/**
 * Unwraps the query results into the specified collection.
 */
export const unwrapDataInCollection = (collection) => (doc) => {
  if (doc.exists()) {
    collection.push({
      id: doc.id,
      ...doc.data(),
    })
  }
}
