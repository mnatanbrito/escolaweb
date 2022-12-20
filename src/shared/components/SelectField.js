/* eslint-disable eqeqeq */
import React from 'react'
import {useField, useFormikContext} from 'formik'
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
  ...rest
}) {
  const {isValid: isFormValid, submitCount} = useFormikContext()
  const parentFormHasBeenSubmitted = submitCount > 0
  const [field, meta] = useField(name)

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={
        (meta.touched && meta.error) ||
        (parentFormHasBeenSubmitted && !isFormValid && meta.error)
      }
    >
      <HStack spacing={0} justifyContent="flex-start" alignItems="flex-start">
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      </HStack>
      <Select {...field} {...rest}>
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
