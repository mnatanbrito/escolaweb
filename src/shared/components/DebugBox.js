import React from 'react'
import {Alert, AlertDescription} from '@chakra-ui/react'

export default function DebugBox({children}) {
  return (
    <Alert status="error">
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
