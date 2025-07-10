import React from 'react';
import './BookingConfirmation.css';

function BookingConfirmation({ flight }) {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>You have successfully booked your flight with {flight.airline}.</p>
      <p>Departure Time: {flight.time}</p>
      <p>Total Price: ₹{flight.price}</p>
    </div>
  );
}

export default BookingConfirmation;
