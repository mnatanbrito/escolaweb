import * as yup from 'yup';

const trimEnd = (value, originalValue) => {
  return (value || '').trimEnd();
};

export default yup.string().transform(trimEnd).email();
