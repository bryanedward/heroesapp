import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {AuthContext} from '../../auth/AuthContext'
import { types } from '../../types/types'
export const Navbar = () => {

  const {state} = useContext(AuthContext)
  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)
  

  const action = {
    type: types.logout
  }

  const btnSalir = () => {
    dispatch(action)
    navigate('/login',{
      replace: true
    })
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link
        className="navbar-brand"
        to="/"
      >
        HeroApps
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => 'nav-item nav-link' + (isActive ? 'active' : '')}
            to="/marvel">
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => 'nav-item nav-link' + (isActive ? 'active' : '')}
            to="/dc">
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav-item nav-link' + (isActive ? 'active' : '')}
            to="/heroe">
            Heroe
          </NavLink>
          <NavLink
            className={({ isActive }) => 'nav-item nav-link' + (isActive ? 'active' : '')}
            to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-info'>
            {state.name}
          </span>
          <button className="nav-item nav-link btn" onClick={btnSalir}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
