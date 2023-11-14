import React from 'react'
import { useLocation } from 'react-router-dom'
const Formdata = () => {
    const data=useLocation().state.submitteddata;
  return (
    <div>
      <h1>form Data</h1>
      <p>{data.Name}</p>
      <p>{data.phone}</p>
      <p>{data.Email}</p>
      <p>{data.gender}</p>
    </div>
  )
}

export default Formdata
