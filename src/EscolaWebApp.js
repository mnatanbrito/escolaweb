import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Provider } from 'react-redux';

import customTheme from './theme';
import store from './shared/store';
import configureFirebaseApp from './shared/firebase';
import GateKeeper from './components/auth/GateKeeper';
import AuthContext from './components/auth/AuthContext';
import BaseLayout from './shared/components/BaseLayout';
import Router from './shared/components/Router';

const firebaseApp = configureFirebaseApp();

export default function EscolaWebApp() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <AuthContext.Provider value={firebaseApp.auth()}>
        <Provider store={store}>
          <GateKeeper>
            <BaseLayout>
              <Router />
            </BaseLayout>
          </GateKeeper>
        </Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
