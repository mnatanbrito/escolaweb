import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore'

import {cacheKey} from './constants'
import {unwrapData} from '../../shared/service/utils'
import firebase from '../../shared/firebase'

const db = getFirestore(firebase)

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
