import React, { useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getByNameHero } from '../../selectors/getByNameHero';
import { HeroCard } from '../hero/HeroCard';
const queryString = require('query-string');

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [value, setvalue] = useState('')
  const { q = '' } = queryString.parse(location.search)
  const getAllHero = useMemo(() => getByNameHero(q),[q]) 

  const btnSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${value}`)
  }

  const valuesInput = (e) => {
    setvalue(e.target.value)
  }

  return (
    <div className='d-flex justify-content-around'>
      <div>
        <form onSubmit={btnSearch}>
          <p>Buscar</p>
          <input type="text" onChange={valuesInput} />
          <button className='btn btn-success' onClick={btnSearch}>
            Buscar</button>
        </form>
      </div>
      <div>

        {
          (!getAllHero) ? <p>no hay datos</p> :
            getAllHero.map((item, index) => (
              <HeroCard key={index} {...item} />
            ))
        }
      </div>
    </div>
  )
}
