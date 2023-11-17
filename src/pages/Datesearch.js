import React, { useState } from 'react';
import './Datesearch.css'
const Datesearch = () => {
  const [filterDate, setFilterDate] = useState('');
  const [data, setData] = useState([
    { date: '2023-11-10', product: 'Giridhar', quantity: 115, price: 1000 },
    { date: '2023-10-05', product: 'Bharath', quantity: 5, price: 800 },
    { date: '2023-09-10', product: 'Vikas', quantity: 27, price: 759.99 },
    { date: '2023-11-01', product: 'Balaram', quantity: 22, price: 1050.99 },
    { date: '2023-01-09', product: 'Ranga', quantity: 111, price: 670.99 },
  ]);

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleReset = () => {
    setFilterDate('');
  };
  // const filteredData = data.filter((item) => item.date.includes(filterDate));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  

  const filteredData = data.filter((item) =>
    formatDate(item.date).includes(filterDate)
  );

  const datedata=filteredData.map((item, index) => (
    <tr key={index}>
      <td className='col'>{item.date}</td>
      <td className='col'>{item.product}</td>
      <td className='col'>{item.quantity}</td>
      <td className='col'>${item.price.toFixed(2)}</td>
    </tr>
  ))

  return (
    <div className='datefilter'>
      <h2 className='datafilter1'>Search by Date</h2>

      <label htmlFor="dateFilter">search by Date:</label>
      <input
        type="date"
        id="dateFilter"
        className='int'
        value={filterDate}
        onChange={handleDateChange}
      />
       <button onClick={handleReset} className='reset'>Reset</button>

      <table className='table'>
        <thead>
          <tr >
            <th className='col1'> Joining Date</th>
            <th className='col1'>Name</th>
            <th className='col1'>Employee Id</th>
            <th className='col1'>Salary</th>
          </tr>
        </thead>
        <tbody>
            {datedata}
          {/* {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Datesearch;
