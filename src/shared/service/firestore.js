import {
  query,
  orderBy,
  startAfter,
  limit,
  where,
  getDocs,
} from 'firebase/firestore'
import {unwrapDataInCollection} from './utils'

export const getDataByField = async ({
  collectionRef,
  field,
  fieldValue,
  skip = 0,
  take = 10,
  lastVisible = null,
  orderByField,
  operator = '==',
}) => {
  if (!collectionRef) {
    throw new Error(`Collection ref não informado`)
  }
  if (!field) {
    throw new Error(`${field} não informado`)
  }

  const results = []
  const q =
    skip !== 0
      ? query(
          collectionRef,
          where(field, operator, fieldValue),
          orderBy(orderByField),
          startAfter(lastVisible),
          limit(take)
        )
      : query(
          collectionRef,
          where(field, operator, fieldValue),
          orderBy(orderByField),
          limit(take)
        )
  const documentSnapshots = await getDocs(q)

  documentSnapshots.forEach(unwrapDataInCollection(results))

  return {
    hasNext: results.length === take,
    lastVisible: documentSnapshots.docs[documentSnapshots.docs.length - 1],
    results,
  }
}
