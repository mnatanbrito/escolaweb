import {FormControl, Checkbox} from '@chakra-ui/react'
import {useField} from 'formik'

export default function InputCheckbox({
  name,
  text,
  isRequired = false,
  ...rest
}) {
  const [field, meta] = useField({
    name,
  })
  return (
    <FormControl isRequired={isRequired} isInvalid={meta.touched && meta.error}>
      <Checkbox
        name={field.name}
        onChange={field.onChange}
        checked={field.value}
        {...rest}
      >
        {text}
      </Checkbox>
    </FormControl>
  )
}
