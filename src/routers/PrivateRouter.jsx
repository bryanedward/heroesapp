import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { MarvelScreen } from '../components/marvel/MarvelScreen'

export const PrivateRouter = ({children}) => {
const {state} = useContext(AuthContext)
return (
    state.logged ? children : <Navigate to='/login'/>
  )
}
