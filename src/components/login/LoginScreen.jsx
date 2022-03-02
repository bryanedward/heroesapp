import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate()
  

  const BtnAcceder = () => {
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
