import React from 'react'

import UserInfoContext from './UserInfoContext'

const useUserInfoContext = () => {
  const userInfoContext = React.useContext(UserInfoContext)
  if (!userInfoContext) {
    return {}
  }

  const {
    displayName,
    email,
    emailVerified,
    isAnonymous,
    metadata: {createdAt, lastLoginAt},
  } = userInfoContext

  return {
    displayName,
    email,
    emailVerified,
    isAnonymous,
    createdAt: new Date(parseInt(createdAt)),
    lastLoginAt: new Date(parseInt(lastLoginAt)),
  }
}

export default useUserInfoContext
