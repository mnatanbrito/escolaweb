import React, { useState } from 'react';

import SignIn from './SignIn';

export default function GateKeeper({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <SignIn />;
  }

  return React.Children.only(children);
}
