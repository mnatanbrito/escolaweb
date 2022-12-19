import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  limit,
} from 'firebase/firestore'

import {cacheKey} from './constants'
import {unwrapData, unwrapDataInCollection} from '../../shared/service/utils'
import firebase from '../../shared/firebase'

const db = getFirestore(firebase)
const escolasRef = collection(db, cacheKey)

export const getEscolas = async () => {
  const escolas = []
  const escolasQuerySnapshot = await getDocs(collection(db, cacheKey))

  escolasQuerySnapshot.forEach((doc) => {
    escolas.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  return escolas
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
