import BookingForm from "./BookingForm";
import { useReducer } from "react";


function Booking({ availableTimes, dispatch }) {
  return (
    <div className="flex flex-col gap-4 m-10">
      <h1 className="'text-primaryGreen font-heading font-bold text-display">Book Now</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Booking;