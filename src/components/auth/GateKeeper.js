import React, {useEffect, useContext, useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import SignIn from './SignIn'
import AuthContext from './AuthContext'
import SplashScreen from './SplashScreen'
import UserInfoContext from './UserInfoContext'

export default function GateKeeper({children}) {
  const auth = useContext(AuthContext)

  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const checkAuthState = async () => {
      if (auth) {
        try {
          const {
            data: {session},
          } = await auth.getSession()
          if (session) {
            setIsAuthenticated(true)
            setUserInfo(session.user)
          } else {
            setIsAuthenticated(false)
            setUserInfo(null)
          }
        } catch (err) {
          // TODO: log it somewhere for auditing?
          console.error('User authentication failed', {
            err,
          })
          setIsAuthenticated(false)
          setUserInfo(null)
        }

        auth.onAuthStateChange((event, session) => {
          setUserInfo(session?.user)
          setIsAuthenticated(event === 'SIGNED_OUT')
        })

        setHasCheckedAuth(true)
      }
    }

    checkAuthState()
  }, [auth])

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
