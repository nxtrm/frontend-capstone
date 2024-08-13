import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Booking from './Booking';

describe('Booking Component', () => {
    test('renders initial available times', () => {
      render(<Booking />);
      const timeOptions = screen.getAllByRole('option');
      expect(timeOptions[1].textContent).toBe('12:00');
      expect(timeOptions[2].textContent).toBe('12:30');
      expect(timeOptions[3].textContent).toBe('13:00');
      expect(timeOptions[4].textContent).toBe('13:30');
      expect(timeOptions[5].textContent).toBe('14:00');
    });

    test('Renders the BookingForm heading', () => {
        render(<Booking />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })
  
    test('updates available times on date change', () => {
      render(<Booking />);
      const dateInput = screen.getByLabelText('date');
      fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
      const timeOptions = screen.getAllByRole('option');
      expect(timeOptions[1].textContent).toBe('12:00');
      expect(timeOptions[2].textContent).toBe('12:30');
      expect(timeOptions[3].textContent).toBe('13:00');
      expect(timeOptions[4].textContent).toBe('13:30');
      expect(timeOptions[5].textContent).toBe('14:00');
    });
  
    test('submits the form with correct data', () => {
      console.log = jest.fn();
      render(<Booking />);
      const dateInput = screen.getByLabelText('date');
      const timeSelect = screen.getByLabelText('time');
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
  
      fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
      fireEvent.change(timeSelect, { target: { value: '12:00' } });
      fireEvent.click(submitButton);
  
      expect(console.log).toHaveBeenCalledWith('Form submitted:', {
        date: '2023-10-10',
        time: '12:00',
        guests: '',
        occasion: '',
        tableLocation: ''
      });
    });
  });