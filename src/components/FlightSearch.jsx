import React, { useState } from 'react';
import './FlightSearch.css';

function FlightSearch({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to, date, passengers });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} required />
      <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} required />
      <button type="submit">Search Flights</button>
    </form>
  );
}

export default FlightSearch;
