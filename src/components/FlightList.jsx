import React from 'react';
import './FlightList.css';

function FlightList({ flights, onBook }) {
  if (flights.length === 0) return <p>No flights available. Try searching!</p>;

  return (
    <div className="flight-list fade-in">
      {flights.map((flight) => (
        <div className="flight-card fade-in" key={flight.id}>
          <h3>{flight.airline}</h3>
          <p>Time: {flight.time}</p>
          <p>Price: ₹{flight.price}</p>
          <button onClick={() => onBook(flight)}>Book</button>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
