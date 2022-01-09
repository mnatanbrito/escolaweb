import React from 'react'
import {VStack, Box, Heading} from '@chakra-ui/layout'

export default function Panel({title, children, ...rest}) {
  return (
    <VStack mt="5" spacing="3" alignItems="flex-start">
      <Heading fontSize="lg" color="black.400">
        {title}
      </Heading>
      <Box p={5} borderWidth="1px" borderRadius="lg" bg="white" width="full">
        {children}
      </Box>
    </VStack>
  )
}
