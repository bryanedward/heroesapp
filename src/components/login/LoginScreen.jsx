import React, { useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { AuthReducer } from '../../auth/AuthReducer'
import { types } from '../../types/types'

export const LoginScreen = () => {

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const BtnAcceder = () => {
    const action = {
      type: types.login,
      payload: {
        name:'edward'
      }
    }
    dispatch(action)
    navigate('/marvel',{
      replace: true
    })
  }

   
  
  return (
    <div>
      <h4>login</h4>
      <button onClick={BtnAcceder}>
        Guardar
      </button>
    </div>
  )
}
