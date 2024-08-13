import React from 'react'
import Chicago from './Chicago'
import food from '../../Assets/restauranfood.jpg'

function Landing() {
return (
    <div className='bg-primaryGreen w-full h-fit'>
        <div className='grid h-full p-10 grid-cols-1 md:grid-cols-2'>
            <Chicago/>
            <div className='flex justify-center items-center'>
                <img className='h-[360px]  hidden md:block w-[375px] rounded-2xl object-cover' src={food} alt="Restaurant food" />
            </div>
        </div>
    </div>
)
}

export default Landing