import React, {useEffect, useContext, useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import SignIn from './SignIn'
import AuthContext from './AuthContext'
import SplashScreen from './SplashScreen'
import UserInfoContext from './UserInfoContext'

export default function GateKeeper({children}) {
  const authContext = useContext(AuthContext)
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const authStateChanged = (user) => {
      setHasCheckedAuth(true)
      if (user) {
        setIsAuthenticated(true)
        setUserInfo(user)
      } else {
        setIsAuthenticated(false)
        setUserInfo(null)
      }
    }

    onAuthStateChanged(authContext, authStateChanged)
  }, [authContext])

  if (!hasCheckedAuth) {
    return <SplashScreen />
  }

  if (!isAuthenticated) {
    return <SignIn />
  }

  return (
    <UserInfoContext.Provider value={userInfo}>
      {React.Children.only(children)}
    </UserInfoContext.Provider>
  )
}
