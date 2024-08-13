import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../api';
import { tab } from '@testing-library/user-event/dist/tab';

jest.mock('../../api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('Booking Component', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });


  test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test('updates available times on date change', () => {
    fetchAPI.mockReturnValue(['12:00', '12:30', '13:00', '13:30', '14:00']);
    render(<BookingPage />);
    const dateInput = screen.getByLabelText('date');
    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
    const timeOptions = screen.getAllByRole('option');
    expect(timeOptions[1].textContent).toBe('12:00');
    expect(timeOptions[2].textContent).toBe('12:30');
    expect(timeOptions[3].textContent).toBe('13:00');
    expect(timeOptions[4].textContent).toBe('13:30');
    expect(timeOptions[5].textContent).toBe('14:00');
  });

  test('guests validated', () => {
    render(<BookingPage />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    const errorElement = screen.getByText('Please select the number of guests.');
    expect(errorElement).toBeInTheDocument();
  })

  test('form submitted correctly', async () => {
    render(<BookingForm availableTimes={['12:00']} dispatch={jest.fn()} />);

    const dateInput = screen.getByLabelText('date');
    const timeInput = screen.getByLabelText('time');
    const guestsRadioButton1 = screen.getByRole('button', { name: /4\+/i });
    const occasionInput = screen.getByLabelText('Occasion(Optional)');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
    fireEvent.change(timeInput, { target: { value: '12:00' } });
    fireEvent.click(guestsRadioButton1);
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

    fireEvent.click(submitButton);

    expect(submitAPI).toHaveBeenCalledWith({ date: '2023-10-10', time: '12:00', guests: '4+', occasion: 'Birthday', tableLocation: '' });
  })
})