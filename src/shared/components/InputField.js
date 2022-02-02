/* eslint-disable no-unused-vars */
import React from 'react'
import {useField} from 'formik'
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react'

export default function InputField({
  name,
  label,
  type = 'text',
  placeholder,
  maxLength,
  leftIcon,
  leftIconColor,
  mask = null,
  isRequired = false,
  onChange = () => null,
  onBlur = () => null,
  ...rest
}) {
  const [field, meta, {setValue}] = useField({
    name,
    onChange,
    onBlur,
  })

  const formattedValue = (mask ? mask(field.value) : field.value) || ''

  const changeCallback = mask
    ? (evt) => {
        const newValue = mask(evt.target.value)

        setValue(newValue, true)
      }
    : field.onChange

  return (
    <FormControl isRequired={isRequired} isInvalid={meta.touched && meta.error}>
      <HStack spacing={0} justifyContent="flex-start" alignItems="flex-start">
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      </HStack>
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
          value={formattedValue}
          maxLength={maxLength}
          onChange={changeCallback}
          onBlur={field.onBlur}
          {...rest}
        />
      </InputGroup>

      {meta.error && (
        <FormErrorMessage data-testid={`${name}-error`} textAlign="center">
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
