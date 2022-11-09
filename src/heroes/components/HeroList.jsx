import { useMemo } from 'react'
import { getHeroesByPubliser } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPubliser(publisher), [publisher])

  return (
    <div className='row rows-col-1 row-cols-md-3 g-3'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
