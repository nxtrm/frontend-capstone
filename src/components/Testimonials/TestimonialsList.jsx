import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialsData from './testimonialsData';

function TestimonialsList() {
  return (
    <div>
      <div className='h-fit p-10 bg-secondaryBeige flex flex-col'>
        <h1 className='text-primaryGreen font-heading font-bold text-display'>Testimonials</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              customerName={testimonial.customerName}
              description={testimonial.description}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsList;