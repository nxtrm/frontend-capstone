import React, { useState } from 'react';
import Button from '../Button/Button';
import GuestButtons from './GuestButtons';
import TableButtons from './TableButtons';

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    tableLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleGuestChange = (guests) => {
    setFormData({
      ...formData,
      guests
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[50%] gap-5 p-5 bg-secondaryBeige rounded-lg">
      <div className="form-group col-span-2">
        <label htmlFor="date" className="block text-highlightDark font-body mb-2">Date*</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border-2  border-primaryGreen rounded"
        />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="time" className="block text-highlightDark font-body mb-2">Time*</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-2 border-2 selection: border-primaryGreen rounded"
        />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="guests" className="block text-highlightDark font-body mb-2">Number of guests*</label>
        <GuestButtons selectedGuests={formData.guests} onGuestChange={handleGuestChange} />
      </div>
      <div className="form-group col-span-2">
        <label htmlFor="occasion" className="block text-highlightDark  font-body mb-2">Occasion(Optional)</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="w-full p-2 border-2  border-primaryGreen rounded"
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
        <Button type="submit" className="bg-primaryGreen text-white font-body py-2 px-4 rounded">Submit reservation</Button>
      </div>
    </form>
  );
}

export default BookingForm;