import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';
import { fetchAPI } from '../../api';

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

});