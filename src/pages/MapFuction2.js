import React, { useState } from 'react'

const MapFuction2 = () => {
  
      const data = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ];
      const [search,setSearch]=useState('')

      const handleInputChange=(e)=>{setSearch(e.target.value)}

      const filterData=data.filter((searchValue)=>{
        const itemSearched=search.toLowerCase()
        return(searchValue.name.toLowerCase().includes(itemSearched) ||searchValue.id.toString().includes(itemSearched)||searchValue.age.toString().includes(itemSearched))
      })

const row=filterData.map((item) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
  </tr>
))
  return (
    <div> 
      <input placeholder='Enter Here...' type='text' value={search} onChange={handleInputChange} />
    <h1>3</h1>
  <table border="1">
  <thead>
    <tr>
    <th>Id</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {row}
  </tbody>
</table>
</div>
  )
}

export default MapFuction2
    
