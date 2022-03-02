
import React, { useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'
export const App = () => {


  const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: true};
  }

  const [state, dispatch] = useReducer(AuthReducer, {} , init )

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
