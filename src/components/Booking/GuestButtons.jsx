import React from 'react';
import RadioButton from '../RadioButton/RadioButton';


function GuestButtons({ selectedGuests, onGuestChange }) {
  const guestOptions = [1, 2, 3, '4+'];

  return (
    <div className="flex space-x-2">
      {guestOptions.map((option) => (
        <RadioButton
          key={option}
          selected={selectedGuests === option}
          onClick={() => onGuestChange(option)}
        >
          {option}
        </RadioButton>
      ))}
    </div>
  );
}

export default GuestButtons;