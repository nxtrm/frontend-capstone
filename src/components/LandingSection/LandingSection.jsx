import React from 'react'
import Chicago from './Chicago'
import food from '../../Assets/restauranfood.jpg'

function LandingSection() {
return (
    <section className='bg-primaryGreen w-full h-[400px]'>
        <div className='grid grid-cols-2'>
            <Chicago/>
            <img className='pt-10 h-[325px] w-[375px] object-cover' src={food} alt="Restaurant food" />
        </div>
    </section>
)
}

export default LandingSection