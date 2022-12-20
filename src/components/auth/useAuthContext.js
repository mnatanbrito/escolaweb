import React from 'react'

import AuthContext from './AuthContext'

const useAuthContext = () => {
  return React.useContext(AuthContext)
}

export default useAuthContext
