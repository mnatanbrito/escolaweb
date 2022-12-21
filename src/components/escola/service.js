import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  limit,
  addDoc,
  orderBy,
  startAfter,
  deleteDoc,
} from 'firebase/firestore'

import {cacheKey} from './constants'
import {unwrapData, unwrapDataInCollection} from '../../shared/service/utils'
import firebase from '../../shared/firebase'

const db = getFirestore(firebase)
const escolasRef = collection(db, cacheKey)

export const getEscolas = async ({skip = 0, take = 5, lastVisible = null}) => {
  // TODO: add a filter by "ativa = true" that is attached to the auth role of the user
  const escolas = []
  const q =
    skip !== 0
      ? query(
          escolasRef,
          orderBy('dataCriacao'),
          startAfter(lastVisible),
          limit(take)
        )
      : query(escolasRef, orderBy('dataCriacao'), limit(take))
  const documentSnapshots = await getDocs(q)

  documentSnapshots.forEach((doc) => {
    escolas.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  return {
    hasNext: escolas.length === take,
    lastVisible: documentSnapshots.docs[documentSnapshots.docs.length - 1],
    escolas,
  }
}

export const getEscola = async (id) => {
  const docRef = doc(db, cacheKey, id)
  const escolaQuerySnapshot = await getDoc(docRef)

  return unwrapData(escolaQuerySnapshot)
}

/**
 * Retorna a escola associada ao slug informado.
 * @param {String} slug - Slug da escola a ser retornada.
 * @returns
 */
export const getEscolaBySlug = async (slug) => {
  if (!slug) {
    throw new Error('Slug não informado')
  }

  const q = query(escolasRef, where('slug', '==', slug), limit(1))
  const results = []
  const querySnapshot = await getDocs(q)
  if (!querySnapshot) {
    throw new Error('Nenhuma escola foi encontrada')
  }

  querySnapshot.forEach(unwrapDataInCollection(results))

  return results[0]
}

export const addEscola = async (dadosEscola) => {
  const docRef = await addDoc(escolasRef, dadosEscola)
  return docRef.id
}

export const deleteEscola = async (idEscola) => {
  await deleteDoc(doc(escolasRef, idEscola))
}
