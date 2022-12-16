import {HStack} from '@chakra-ui/react'

const FormRow = ({spacing = 3, mb = 5, children, ...rest}) => {
  return (
    <HStack spacing={spacing} mb={mb} alignItems="flex-start" {...rest}>
      {children}
    </HStack>
  )
}

export default FormRow
