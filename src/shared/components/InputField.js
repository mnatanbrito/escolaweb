/* eslint-disable no-unused-vars */
import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function InputField({
  name,
  label,
  type = 'text',
  placeholder,
  maxLength,
  leftIcon,
  leftIconColor,
  isRequired = false,
  onChange = () => null,
  onBlur = () => null,
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
      <InputGroup>
        {leftIcon && (
          <InputLeftElement
            children={<Icon name={leftIcon} color={leftIconColor} />}
          />
        )}

        <Input
          name={field.name}
          type={type}
          placeholder={placeholder}
          value={field.value}
          maxLength={maxLength}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...rest}
        />

        {meta.error && (
          <FormErrorMessage data-testid={`${name}-error`} textAlign="center">
            {meta.error}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
}
