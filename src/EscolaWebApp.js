import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Provider } from 'react-redux';

import configureI18n from './shared/i18n';
import customTheme from './theme';
import store from './shared/store';
import configureFirebaseApp from './shared/firebase';
import GateKeeper from './components/auth/GateKeeper';
import AuthContext from './components/auth/AuthContext';

const firebaseApp = configureFirebaseApp();

configureI18n();

export default function EscolaWebApp() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <AuthContext.Provider value={firebaseApp.auth()}>
        <Provider store={store}>
          <GateKeeper>
            <h2>Hello World</h2>
          </GateKeeper>
        </Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
