/* eslint-disable eqeqeq */
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
  fieldValueExtractor = null,
  onChange,
  onBlur,
  ...rest
}) {
  const [field, meta] = useField({
    name,
    onBlur,
    onChange,
  })

  return (
    <FormControl isRequired={isRequired} isInvalid={meta.touched && meta.error}>
      <HStack spacing={0} justifyContent="flex-start" alignItems="flex-start">
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      </HStack>
      <Select
        {...field}
        {...rest}
        // onChange={(changeEvent) => {
        //   const foundItem = find(
        //     items,
        //     (item) => item.value == changeEvent.target.value
        //   )

        //   const selectedItem = fieldValueExtractor
        //     ? fieldValueExtractor(foundItem)
        //     : foundItem

        //   debugger

        //   setValue(selectedItem, true)
        //   field.onChange(changeEvent)
        //   onChange(foundItem)
        // }}
      >
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
