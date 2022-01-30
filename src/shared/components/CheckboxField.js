import {Checkbox} from '@chakra-ui/react'
import {useField} from 'formik'

export default function InputCheckbox({name, text, ...rest}) {
  const [field] = useField({
    name,
  })
  return (
    <Checkbox
      name={field.name}
      onChange={field.onChange}
      checked={field.value}
      {...rest}
    >
      {text}
    </Checkbox>
  )
}
