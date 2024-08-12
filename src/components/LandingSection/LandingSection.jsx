import React from 'react'
import Chicago from './Chicago'
import food from '../../Assets/restauranfood.jpg'

function LandingSection() {
return (
    <section className='bg-primaryGreen w-full h-fit'>
        <div className='grid h-full p-10 grid-cols-2'>
            <Chicago/>
            <div className='flex justify-center items-center'>
                <img className='h-[360px] w-[375px] rounded-2xl object-cover' src={food} alt="Restaurant food" />
            </div>
        </div>
    </section>
)
}

export default LandingSection