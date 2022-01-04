import React from 'react'
import {Flex, Stack, Text, Box, Spinner} from '@chakra-ui/react'

export default function SplashScreen() {
  return (
    <Flex
      display="flex"
      flex="1"
      justify="center"
      align="center"
      style={{
        height: '100vh',
      }}
      bg="#F7FAFC"
    >
      <Stack spacing={3} justify="center" align="center">
        <Box display="flex" flex="1">
          <Spinner color="primaryBlue" />
        </Box>
        <Text color="primaryBlue" fontSize="xl">
          Carregando...
        </Text>
      </Stack>
    </Flex>
  )
}
