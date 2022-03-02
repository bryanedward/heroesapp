import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  
    const getByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 
    return (
    <div className='d-flex flex-wrap gap-5'>

        {
            getByPublisher.map((item, index) => (
                <HeroCard key={index} {...item}/>
            ))
        }

    </div>
  )
}
