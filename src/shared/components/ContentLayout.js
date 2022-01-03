import React from 'react'
import {Flex, Heading} from '@chakra-ui/react'

import Container from './Container'

export default function ContentLayout({
  children,
  title,
  bgHeader = 'blue.600',
}) {
  return (
    <Flex flex={1} flexDirection="column">
      <Flex bg={bgHeader} height="180px" p={3}>
        <Container>
          <Heading color="white">{title}</Heading>
        </Container>
      </Flex>
      <Flex flex={1} flexGrow={1} p={3}>
        <Container>{children}</Container>
      </Flex>
    </Flex>
  )
}
