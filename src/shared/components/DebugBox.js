import React from 'react'
import {Alert, AlertDescription} from '@chakra-ui/react'

import useEnv from '../hooks/useEnv'

export default function DebugBox({children}) {
  const {isProd} = useEnv()
  if (isProd) {
    return null
  }

  return (
    <Alert status="error">
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
