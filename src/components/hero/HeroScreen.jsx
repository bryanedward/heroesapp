import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getById } from '../../selectors/getById'

export const HeroScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const data = useMemo(() => getById(id), [id] )

  const btnBack = () => {
    navigate('/',{
      replace:true
    })
  }

  if (!data) return <Navigate to={'/'} />
  const imagen = `/assets/${id}.jpg`
  return (
    <div className=''>
      <img src={imagen} alt=""  width='140px'/>
      <div>
        <h3>{data.id}</h3>
        <p>{data.superhero}</p>
      </div>
      <button className='btn btn-warning' onClick={btnBack}>
        regresar
      </button>
    </div>
  )
}
