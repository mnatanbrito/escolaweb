import React from 'react'
import {Heading, Container, VStack, Box} from '@chakra-ui/react'

export default function ContentLayout({children, title, ...rest}) {
  return (
    <VStack spacing={0}>
      <Container maxW="container.xl" paddingLeft={0} paddingTop="5">
        <Box mb="5">
          <Heading size="lg" color="black.400">
            {title}
          </Heading>
        </Box>
        <Box {...rest}>{children}</Box>
      </Container>
    </VStack>
  )
}
