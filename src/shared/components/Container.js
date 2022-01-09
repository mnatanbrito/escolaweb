import React from 'react'
import {Flex} from '@chakra-ui/react'

export default function Container({children}) {
  return (
    <Flex flex={1} justify="center" align="flex-start">
      <Flex
        flexGrow={1}
        position="relative"
        width="auto"
        maxW={{
          sm: '100%',
          md: '960px',
          lg: '1152px',
          xl: '1344px',
        }}
      >
        {children}
      </Flex>
    </Flex>
  )
}
