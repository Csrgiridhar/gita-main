import React, { useState } from 'react';
import './Datesearch.css'
const Searchbybaranddate = () => {
  const [filterDate, setFilterDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setFilterDate('');
    setSearchTerm('');
  };

  const filteredData = data.filter(
    (item) =>
      item.date.includes(filterDate) &&
      (item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.quantity.toString().includes(searchTerm) ||
        item.price.toFixed(2).includes(searchTerm))
  );

  return (
    
    <div className='datefilter2'>
      <h2 className='datafilter1'>Search by Date and Bar</h2>

      <label htmlFor="dateFilter">Search by Date:</label>
      <input
        type="date"
        id="dateFilter"
        className='int'
        value={filterDate}
        onChange={handleDateChange}
      />
      <br></br>

      <label htmlFor="searchBar">Search:</label>
      <input
        type="text"
        id="searchBar"
        className='search1'
        value={searchTerm}
        onChange={handleSearchChange}
      /><br></br>

      <button onClick={handleReset} className='reset1'>Reset</button>

      <table className='table1'>
        <thead>
          <tr>
          <th className='col1'> Joining Date</th>
            <th className='col1'>Name</th>
            <th className='col1'>Employee Id</th>
            <th className='col1'>Salary</th>
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
  );
};

export default Searchbybaranddate;
