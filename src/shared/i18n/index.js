import { setLocale } from 'yup';

import yupPtBr from './yup.pt-BR';

const configureYup = () => {
  setLocale(yupPtBr);
};

export default function configure() {
  configureYup();
}
