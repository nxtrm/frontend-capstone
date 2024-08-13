import BookingForm from "./BookingForm";

function Booking() {
    return (
      <section className="m-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <h2>Book Your Reservation</h2>
        <BookingForm />
      </section>
    );
  }

export default Booking