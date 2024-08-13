import BookingForm from "./BookingForm";
import { fetchAPI } from '../../api';
import { useReducer } from 'react';


const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const response = fetchAPI(new Date (action.date));
      return response;

    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="flex flex-col gap-4 m-10">
      <h1 className="'text-primaryGreen font-heading font-bold text-display">Book Now</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;