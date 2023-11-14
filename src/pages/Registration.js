import React,{useState} from 'react'
import '../pages/Registration.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Formdata from './Formdata'
const Registration = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        Name:'',
        Password:'',
        RepeatPassword:'',
        

    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
         })
         


        

    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("Registration Form:",formData)
        // navigate('/Signin',{state:{submitteddata:formData}});
        if(formData.Password===formData.RepeatPassword){
            navigate('/Signin',{state:{submitteddata:formData}});
        }
        else{
            alert("password mismatched")
            
        }
        
    }
  return (
    <div className='divison1'>
        <fieldset >
       <form className='f1' onSubmit={handlesubmit}>
            {/* <legend className='l1'>Registration Form</legend> */}
            <label className='label1'>Name</label><br></br>
            <input className='input1' type='text' placeholder='Enter name' name='Name' required  onChange={handleChange}  /><br></br>
            <label className='label1'>Password</label><br></br>
            <input className='input1' type='password' placeholder='Enter password' required name='Password'  onChange={handleChange}  /><br></br>
            <label className='label1'>Repeat Password</label><br></br>
            <input className='input1' type='password' placeholder='Confirm password' required name='RepeatPassword'   onChange={handleChange}  /><br></br>
            

            <button className='but1' type='submit' >Register</button>
            {/* <Link to='/Registration1'><button type='submit' className='but1'>submit</button></Link> */}
            {/* <h1>name:{regForm.Name},phone:{regForm.Phone},email:{regForm.Email}</h1> */}
        </form>
        </fieldset>
    </div>
  )
}

export default Registration
