import React,{useState} from 'react'

const Forms = () => {
    const [formData,setFormData]=useState({
        First_Name:'',
        Last_Name:'',
        Email:''

    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log("form Data",formData)
        // setFormData({
        //     First_Name:'',
        //     Last_Name:'',
        //     Email:''
    
        // })
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type='text' placeholder='First name' name='First_Name'  onChange={handleChange} value={formData.First_Name} /><br></br>
            <input type='text' placeholder='Last name'  name='Last_Name'  onChange={handleChange}  value={formData.Last_Name}/><br></br>
            <input type='email' placeholder='Email'  name='Email'   onChange={handleChange}  value={formData.Email}/><br></br>
            <button type='submit' >submit</button>
        </form>
      
      
    </div>
  )
}

export default Forms
