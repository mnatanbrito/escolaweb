import React from 'react'
import {Box, Heading} from '@chakra-ui/layout'

export default function Panel({title, children, ...rest}) {
  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" shadow="md" {...rest}>
      <Heading fontSize="md" color="gray.600">
        {title}
      </Heading>
      <Box mt={4}>{children}</Box>
    </Box>
  )
}
