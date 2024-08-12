import React from 'react'
import Button from '../Button/Button';

function SpecialsCard({ name, description, image, price }) {
    return (
      <div className=" rounded-2xl shadow-lg overflow-hidden max-w-sm">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col gap-4">
            <div className='flex flex-row justify-between'>
                <h2 className="font-heading text-cardTitle text-primaryGreen mb-2">{name}</h2>
                <p className="font-heading text-cardTitle text-secondaryTomato mb-2">{price}</p>
            </div>
            <p className="font-body text-paragraph text-highlightDark">{description}</p>
            <Button>Order Delivery</Button>
        </div>
      </div>
    );
}

export default SpecialsCard;