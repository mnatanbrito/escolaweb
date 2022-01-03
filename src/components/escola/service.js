import {cacheKey} from './constants'
import {unwrapData} from '../../shared/service/utils'
import firebase from '../../shared/firebase'

const db = firebase.firestore()

export const getEscolas = () => {
  return db
    .collection(cacheKey)
    .get()
    .then((querySnapshot) => {
      const results = []

      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return results
    })
}

export const getEscola = (id) => {
  return db.collection(cacheKey).doc(id).get().then(unwrapData)
}
