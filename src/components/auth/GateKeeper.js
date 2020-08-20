import React, { useEffect, useContext, useState } from 'react';

import SignIn from './SignIn';
import AuthContext from './AuthContext';
import SplashScreen from './SplashScreen';

export default function GateKeeper({ children }) {
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const authStateChanged = (user) => {
      setHasCheckedAuth(true);
      if (user) {
        setIsAuthenticated(true);
      }
    };

    authContext.onAuthStateChanged(authStateChanged);
  }, [authContext]);

  if (!hasCheckedAuth) {
    return <SplashScreen />;
  }

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return React.Children.only(children);
}
