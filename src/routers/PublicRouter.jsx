import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { LoginScreen } from '../components/login/LoginScreen'

export const PublicRouter = () => {
    const {state} = useContext(AuthContext)
  return ( state.logged ? <Navigate to='/marvel'/> : <LoginScreen/>
  )
}
