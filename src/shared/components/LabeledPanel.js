import React from 'react'
import {Stack, Heading, Box} from '@chakra-ui/react'

export default function LabeledPanel({
  label,
  labelColor = 'gray.600',
  labelSize = 'md',
  children,
}) {
  return (
    <Stack spacing={2}>
      <Heading size={labelSize} color={labelColor}>
        {label}
      </Heading>
      <Box>{children}</Box>
    </Stack>
  )
}
