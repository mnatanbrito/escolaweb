import React, {useEffect, useState} from 'react'

import SignIn from './SignIn'
import SplashScreen from './SplashScreen'
import UserInfoContext from './UserInfoContext'
import useAuthContext from './useAuthContext'

export default function GateKeeper({children}) {
  const authContext = useAuthContext()

  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const {
          data: {session},
        } = await authContext.getSession()

        setIsAuthenticated(!!session)
        setUserInfo(session?.user)

        authContext.onAuthStateChange((event, session) => {
          setUserInfo(session?.user)
          setIsAuthenticated(event !== 'SIGNED_OUT')
        })
      } catch (err) {
        // TODO: log it somewhere for auditing?
        console.error('User authentication failed', {
          err,
        })
        setIsAuthenticated(false)
        setUserInfo(null)
      } finally {
        setHasCheckedAuth(true)
      }
    }

    checkAuthState()
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
