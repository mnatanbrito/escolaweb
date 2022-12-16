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
  const [field, meta, {setValue}] = useField(name)

  const memoizedFormattedValue = React.useMemo(() => {
    const maskedValue = mask ? mask(field.value) : field.value
    return maskedValue || ''
  }, [mask, field.value])

  const memoizedOnChange = React.useMemo(
    () =>
      mask
        ? (evt) => {
            setValue(mask(evt.target.value), true)
          }
        : field.onChange,
    [field.onChange, mask, setValue]
  )

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
          {...field}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          value={memoizedFormattedValue}
          onChange={memoizedOnChange}
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
