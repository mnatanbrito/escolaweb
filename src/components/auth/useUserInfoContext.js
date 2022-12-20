import React from 'react'

import UserInfoContext from './UserInfoContext'

const useUserInfoContext = () => {
  return React.useContext(UserInfoContext)
}

export default useUserInfoContext
