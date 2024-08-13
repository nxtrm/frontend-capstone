import BookingForm from "./BookingForm";
import { fetchAPI } from '../../api';
import { useReducer } from 'react';
import food from '../../Assets/restauranfood.jpg'

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
    <div className="flex flex-col gap-4 m-5">
      <h1 className="'text-primaryGreen font-heading font-bold text-display">Book Now</h1>
      <div className="flex flex-col gap-5 md:flex-row">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <img src={food} alt="Restaurant food" className="rounded-lg h-[550px] object-cover  w-full md:w-1/2 hidden md:block" />
      </div>
    </div>
  );
}

export default BookingPage;