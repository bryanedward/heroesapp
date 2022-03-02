import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div className='container mt-3'>
      <HeroList publisher='DC Comics'/>
    </div>
  )
}
