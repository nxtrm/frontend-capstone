import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Chicago() {
return (
    <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-primaryYellow font-heading font-bold text-display'>Little Lemon</h1>
            <h2 className='text-primaryYellow font-body text-subtitle'>Chicago</h2>
            <p className='text-paragraph text-secondaryTomato overflow-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex-grow"></div>
            <Link to='/booking'>
                <Button variant={"primary"}>Book now</Button>
            </Link>
    </div>
)
}

export default Chicago