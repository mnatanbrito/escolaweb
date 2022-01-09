import React from 'react'
import {Flex, Container} from '@chakra-ui/react'
import {Outlet} from 'react-router-dom'

import Header from './Header'

export default function BaseLayout({children}) {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      justify="flex-start"
      align="stretch"
    >
      <Flex
        bg="gray.50"
        borderBottomColor="gray.100"
        borderBottomWidth={1}
        height="60px"
        justifyContent="flex-start"
        alignItems="center"
        p={3}
        paddingLeft={8}
        paddingRight={8}
      >
        <Container maxWidth="container.xl">
          <Header />
        </Container>
      </Flex>
      <Flex bg="gray.50" display="flex" flex={1}>
        <Container maxWidth="container.xl">
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  )
}
