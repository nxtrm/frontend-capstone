/* global fetchAPI, submitAPI */
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import GuestButtons from './GuestButtons';
import TableButtons from './TableButtons';
import { submitAPI } from '../../api';

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    tableLocation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleGuestChange = (guests) => {
    setFormData({
      ...formData,
      guests
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const response = submitAPI(formData)
    if (response) {
      alert('Reservation submitted successfully!');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col w-[50%] gap-5 p-5 bg-secondaryBeige rounded-lg ${isSubmitted ? 'submitted' : ''}`}
    >
      <div className="form-group col-span-2">
        <label htmlFor="date" className="block text-highlightDark font-body mb-2">Date*</label>
        <input
          type="date"
          id="date"
          name="date"
          aria-label='date'
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 border-primaryGreen rounded"
        />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="time" className="block text-highlightDark font-body mb-2">Time*</label>
        <select
          id="time"
          name="time"
          aria-label='time'
          disabled={!formData.date}
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 border-primaryGreen rounded"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="guests" className="block text-highlightDark font-body mb-2">Number of guests*</label>
        <GuestButtons selectedGuests={formData.guests} onGuestChange={handleGuestChange} />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="occasion" className="block text-highlightDark font-body mb-2">Occasion(Optional)</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="w-full p-2 border-2 border-primaryGreen rounded"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="tableLocation" className="block text-highlightDark font-body mb-2">Table Location(Optional)</label>
        <TableButtons selectedTables={formData.tableLocation} onTableChange={(tableLocation) => setFormData({ ...formData, tableLocation })} />
      </div>
      <div className="col-span-2 flex justify-center">
        <Button variant={'secondary'} type="submit" className="bg-primaryGreen text-white font-body py-2 px-4 rounded">Submit reservation</Button>
      </div>
    </form>
  );
}

export default BookingForm;