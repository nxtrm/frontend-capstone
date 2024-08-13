import React from 'react'
import image1 from '../../Assets/m&a1.jpg';


function About() {
  return (
    <section id="about" className='m-10 grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-primaryGreen font-heading font-bold text-display'>About Little Lemon</h1>
        <p>
          Little Lemon is a family-owned restaurant that has been serving the community for over 20 years. We pride ourselves on providing the best dining experience for our customers. Our menu is filled with a variety of dishes that are sure to satisfy your cravings. Whether you're in the mood for a hearty meal or a light snack, we have something for everyone. Come visit us today and see why we're the best restaurant.
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <img src={image1} alt="Mario and Andrian" className='w-[270px] object-cover rounded-2xl h-[330px]' />
      </div>
    </section>
  );
}

export default About;