import React from 'react'
import Button from '../Button/Button'

function Chicago() {
  return (
    <div className='p-10 flex flex-col justify-center gap-2'>
        <h1 className='text-primaryYellow font-heading font-bold text-display'>Little Lemon</h1>
        <h2 className='text-primaryYellow font-body text-subtitle'>Chicago</h2>
        <p className='text-paragraph text-secondaryTomato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button variant={"primary"}>Book now</Button>
    </div>
  )
}

export default Chicago