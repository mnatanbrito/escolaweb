import { cacheKey } from './constants';
import firebase from '../../shared/firebase';

const db = firebase.firestore();

export const getAlunos = (idsAlunos) => {
  const alunos = db.collection(cacheKey);

  return alunos
    .where('id', 'in', idsAlunos)
    .get()
    .then((querySnapshot) => {
      return {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
    });
};

export const getAluno = (idEscola, idAluno) => {
  return db
    .collection(cacheKey)
    .get()
    .then((querySnapshot) => {
      const results = [];

      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return results;
    });
};
