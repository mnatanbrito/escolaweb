import React from 'react'
import {QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {ChakraProvider} from '@chakra-ui/react'
// import {getAuth} from 'firebase/auth'

import customTheme from './theme'
// import firebaseApp from './shared/firebase'
import GateKeeper from './components/auth/GateKeeper'
import AuthContext from './components/auth/AuthContext'
import Router from './shared/components/Router'
import queryClient from './shared/queryClient'
import SupabaseProvider from './shared/providers/SupabaseProvider'
import supabase from './shared/providers/supabase'

const showReactQueryDevTools = false

// const firebaseAuth = getAuth(firebaseApp)

export default function EscolaWebApp() {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <SupabaseProvider>
          <AuthContext.Provider value={supabase.auth}>
            <GateKeeper>
              <Router />
            </GateKeeper>
          </AuthContext.Provider>
        </SupabaseProvider>
        {showReactQueryDevTools && <ReactQueryDevtools initialIsOpen />}
      </QueryClientProvider>
    </ChakraProvider>
  )
}
