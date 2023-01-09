import React from 'react'

import UserInfoContext from './UserInfoContext'

const useUserInfoContext = () => {
  const userInfoContext = React.useContext(UserInfoContext)
  if (!userInfoContext) {
    return {
      roles: [],
    }
  }

  const {email, email_confirmed_at, created_at, last_sign_in_at, role} =
    userInfoContext

  const userInfo = {
    displayName: email,
    email,
    emailVerified: !!email_confirmed_at,
    isAnonymous: role !== 'authenticated',
    createdAt: new Date(created_at),
    lastLoginAt: new Date(last_sign_in_at),
    roles: [],
  }

  return userInfo
}

export default useUserInfoContext
