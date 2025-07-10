import React, { useState } from 'react';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [booking, setBooking] = useState(null);

  const searchFlights = (searchData) => {
    const mockFlights = [
      { id: 1, airline: 'IndiGo', price: 3200, time: '08:00 AM' },
      { id: 2, airline: 'Air India', price: 4500, time: '11:30 AM' },
      { id: 3, airline: 'SpiceJet', price: 3800, time: '05:45 PM' },
    ];
    setFlights(mockFlights);
    setBooking(null);
  };

  const handleBook = (flight) => {
    setBooking(flight);
  };

  return (
    <div className="App">
      <h1>Flight Booking</h1>
      <FlightSearch onSearch={searchFlights} />
      {!booking && <FlightList flights={flights} onBook={handleBook} />}
      {booking && <BookingConfirmation flight={booking} />}
    </div>
  );
}

export default App;
