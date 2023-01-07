import React from 'react'

import supabase from './supabase'

const SupabaseContext = React.createContext(null)

const SupabaseProvider = ({children}) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  )
}

export default SupabaseProvider

export const useSupabaseContext = () => {
  return React.useContext(SupabaseContext)
}
