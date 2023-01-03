import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  limit,
} from 'firebase/firestore'

import {cacheKey} from './constants'
import {unwrapDataInCollection} from '../../shared/service/utils'
import firebase from '../../shared/firebase'
import {getDataByField} from '../../shared/service/firestore'

const db = getFirestore(firebase)
const alunosRef = collection(db, cacheKey)

/**
 * Retorna alunos cujo CPF tem o valor informado como parâmetro.
 * @param {String} cpf - CPF do aluno a ser encontrado.
 * @returns Lista de alunos.
 */
export const getAlunoByCPF = async (cpf) => {
  if (!cpf) {
    throw new Error('CPF não informado')
  }

  const q = query(alunosRef, where('cpf', '==', cpf), limit(1))
  const results = []
  const querySnapshot = await getDocs(q)
  if (!querySnapshot) {
    throw new Error('Nenhuma aluno foi encontrado')
  }

  querySnapshot.forEach(unwrapDataInCollection(results))

  return results[0]
}

export const getAlunosByCPF = ({cpf, skip, take, lastVisible}) => {
  return getDataByField({
    collectionRef: alunosRef,
    field: 'cpf',
    fieldValue: cpf,
    skip,
    take,
    lastVisible,
  })
}

export const getAlunosByNome = ({nome, skip, take, lastVisible}) => {
  return getDataByField({
    collectionRef: alunosRef,
    field: 'nome',
    fieldValue: nome,
    skip,
    take,
    lastVisible,
    orderByField: 'nome',
  })
}

/**
 * Adiciona um novo registro de aluno na coleção.
 * @param {Object} dadosAluno - Dados do aluno.
 * @returns - O registro de aluno recém-criado.
 */
export const addAluno = async (dadosAluno) => {
  const alunoWithCPF = await getAlunoByCPF(dadosAluno.cpf)
  if (alunoWithCPF) {
    throw new Error('Um aluno com o mesmo CPF já foi registrado')
  }
  const docRef = await addDoc(alunosRef, dadosAluno)
  return docRef.id
}

export const getAlunos = async (idsAlunos) => {
  const results = []
  const q = query(alunosRef, where('id', 'in', idsAlunos))
  const alunosQuerySnapshot = await getDocs(q)

  alunosQuerySnapshot.forEach(unwrapDataInCollection(results))

  return results
}

export const getAlunosSemEscola = async () => {
  const results = []
  const q = query(alunosRef, where('escolas', '==', []))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(unwrapDataInCollection(results))

  return results
}
