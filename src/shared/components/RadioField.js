/* eslint-disable eqeqeq */
import {
  FormControl,
  HStack,
  Stack,
  RadioGroup,
  Radio,
  FormLabel,
} from '@chakra-ui/react'
import {useField} from 'formik'
import {map} from 'lodash'
import React from 'react'

export default function RadioField({
  name,
  label,
  isRequired = false,
  isHorizontal = true,
  options = [],
}) {
  const [field, meta, {setValue}] = useField({
    name,
  })
  return (
    <FormControl isRequired={isRequired} isInvalid={meta.touched && meta.error}>
      <HStack spacing={0} justifyContent="flex-start" alignItems="flex-start">
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      </HStack>
      <RadioGroup onChange={setValue} value={field.value}>
        <Stack direction={isHorizontal ? 'row' : 'column'}>
          {map(options, ({label, value}) => (
            <Radio key={value} value={value}>
              {label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}
