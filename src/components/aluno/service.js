import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from 'firebase/firestore'

import {cacheKey} from './constants'
import firebase from '../../shared/firebase'

const db = getFirestore(firebase)

export const addAluno = async (dadosAluno) => {
  const docRef = await addDoc(collection(db, cacheKey), dadosAluno)
  return docRef.id
}

export const getAlunos = async (idsAlunos) => {
  const alunos = []
  const alunosQuery = query(
    collection(db, cacheKey),
    where('id', 'in', idsAlunos)
  )
  const alunosQuerySnapshot = await getDocs(alunosQuery)

  alunosQuerySnapshot.forEach((doc) => {
    alunos.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  return alunos
}

// export const getAluno = (idEscola, idAluno) => {
//   return db
//     .collection(cacheKey)
//     .get()
//     .then((querySnapshot) => {
//       const results = []

//       querySnapshot.forEach((doc) => {
//         results.push({
//           id: doc.id,
//           ...doc.data(),
//         })
//       })

//       return results
//     })
// }
