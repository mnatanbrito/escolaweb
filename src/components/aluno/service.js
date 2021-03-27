import { cacheKey } from './constants';
import { cacheKey as escolaCacheKey } from '../escola/constants';
import firebase from '../../shared/firebase';

const db = firebase.firestore();

export const getAlunos = (idEscola) => {
  const escolas = db.collection(escolaCacheKey);

  return escolas
    .doc(idEscola)
    .get()
    .then((querySnapshot) => {
      const data = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };

      return data.alunos || [];
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
