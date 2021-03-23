import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';

import customTheme from './theme';
import firebaseApp from './shared/firebase';
import GateKeeper from './components/auth/GateKeeper';
import AuthContext from './components/auth/AuthContext';
import BaseLayout from './shared/components/BaseLayout';
import Router from './shared/components/Router';

const queryClient = new QueryClient();

const showReactQueryDevTools = false;

export default function EscolaWebApp() {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={firebaseApp.auth()}>
          <GateKeeper>
            <BaseLayout>
              <Router />
            </BaseLayout>
          </GateKeeper>
        </AuthContext.Provider>
        {showReactQueryDevTools && <ReactQueryDevtools initialIsOpen />}
      </QueryClientProvider>
    </ChakraProvider>
  );
}
