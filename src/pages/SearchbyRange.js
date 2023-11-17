import React, { useState } from 'react';
import './Datesearch.css'
const SearchbyRange = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([
    { date: '2023-11-10', product: 'Giridhar', quantity: 115, price: 1000 },
    { date: '2023-10-05', product: 'Bharath', quantity: 5, price: 800 },
    { date: '2023-09-10', product: 'Vikas', quantity: 27, price: 759.99 },
    { date: '2023-11-01', product: 'Balaram', quantity: 22, price: 1050.99 },
    { date: '2023-01-09', product: 'Ranga', quantity: 111, price: 670.99 },
  ]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
  };

  const filteredData = data.filter(
    (item) =>
      (startDate === '' || item.date >= startDate) &&
      (endDate === '' || item.date <= endDate)
  );

  return (
    <div className='datefilter3'>
        <div className='bg'>
      <h2 className='datafilter3'>Search by Range</h2>

      <label htmlFor="startDateFilter" className='label'>Start Date:</label>
      <input
        type="date"
        id="startDateFilter"
        className='int3'
        value={startDate}
        onChange={handleStartDateChange}
      /><br></br>

      <label htmlFor="endDateFilter" className='label'>End Date:</label>
      <input
        type="date"
        id="endDateFilter"
        className='int3'
        value={endDate}
        onChange={handleEndDateChange}
      /><br></br>

      <button onClick={handleReset} className='reset3'>Reset</button>

      <table className='table3'>
        <thead>
        <tr>
          <th className='col3'> Joining Date</th>
            <th className='col3'>Name</th>
            <th className='col3'>Employee Id</th>
            <th >Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
            <td className='col'>{item.date}</td>
              <td className='col'>{item.product}</td>
              <td className='col'>{item.quantity}</td>
              <td className='col'>${item.price.toFixed(2)}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div> 
    </div>
  );
};

export default SearchbyRange;
