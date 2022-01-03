import React from 'react'
import {Box} from '@chakra-ui/layout'

export default function ShadowBox({children, ...rest}) {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      shadow="sm"
      {...rest}
    >
      {children}
    </Box>
  )
}
