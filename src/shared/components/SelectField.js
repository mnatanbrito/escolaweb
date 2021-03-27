import React from 'react';
import { useField } from 'formik';
import {
  Select,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { map } from 'lodash';

export default function SelectField({
  name,
  label,
  items,
  isRequired,
  onChange,
  onBlur,
  ...rest
}) {
  const [field, meta, _] = useField({
    name,
    onChange,
    onBlur,
  });
  return (
    <FormControl isRequired={isRequired} isInvalid={meta.touched && meta.error}>
      {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      <Select name={field.name} value={field.value} {...rest}>
        {map(items, ({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      {meta.error && (
        <FormErrorMessage data-testid={`${name}-error`} textAlign="center">
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
