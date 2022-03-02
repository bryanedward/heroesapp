import React from 'react'
import {Link} from 'react-router-dom'
export const HeroCard = ({id,superhero, publisher, alter_ego, characters}) => {
  
    const imgPath = `assets/${id}.jpg`
    return (
    <div className='card' style={{
        'width':'13pc'
    }}>
        <img src={imgPath} alt="" style={{
            'width':'100%',
            'objectFit':'cover'
        }}/>
        <p>{superhero}</p>
        {
            (alter_ego != characters)
                && <p className='text-muted'>{characters}</p>
        }
        <Link to={`/heroe/${id}`}>
            ver mas...
        </Link>
    </div>
  )
}
