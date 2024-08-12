import React from 'react'
import Button from '../Button/Button'
import specials from './SpecialsData/specials'
import SpecialsCard from './SpecialsCard'

function SpecialsSection() {
  return (
  <section>
    <div className='m-10 flex flex-col'>
        <div className='flex flex-row items-center gap-5 w-full'>
            <h1 className='text-primaryGreen font-heading font-bold text-display'>Specials</h1>
            <Button extraStyle="hover:border-2 hover:border-primaryYellow" variant="secondary">Online Menu</Button>
        </div>
        <div className='flex justify-center'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full'>
                {specials.map((special) => {
                    return (
                        <SpecialsCard
                            key={special.id}
                            price={special.price}
                            name={special.name}
                            description={special.description}
                            image={special.image}
                        />
                    );
                })}
            </div>
        </div>
    </div>
    </section>
  )
}

export default SpecialsSection