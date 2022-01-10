import React from 'react'
import {useField} from 'formik'
import {
  Select,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
} from '@chakra-ui/react'
import {map} from 'lodash'

export default function SelectField({
  name,
  label,
  items,
  isRequired = false,
  onChange,
  onBlur,
  ...rest
}) {
  const [field, meta] = useField({
    name,
    onChange,
    onBlur,
  })
  return (
    <FormControl isRequired={isRequired} isInvalid={meta.touched && meta.error}>
      <HStack spacing={0} justifyContent="flex-start" alignItems="flex-start">
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      </HStack>
      <Select name={field.name} value={field.value} {...rest}>
        {map(items, ({label, value}) => (
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
  )
}
