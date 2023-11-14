import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Signin.css'

const Signin = () => {
    const data=useLocation().state.submitteddata;
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        Name:'',
        Password:'',
        
        

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
         // navigate('/Dashboard',{state:{submitteddata:formData}});
        if(formData.Name===data.Name && formData.Password===data.Password){
            navigate('/Dashboard',{state:{submitteddata:formData}});

        }
        else{
            alert("Wrong password")
    
        }
       
        
    }
  return (
    <div className='sign1'>
        <fieldset >
       <form className='sign2' onSubmit={handlesubmit}>
            <legend className='l1'>Log-in</legend>
            <label className='label1'>Name</label><br></br>
            <input className='input1' type='text' placeholder='Enter name' name='Name'  onChange={handleChange} required  /><br></br>
            <label className='label1'>Password</label><br></br>
            <input className='input1' type='password' placeholder='Enter password' name='Password'  onChange={handleChange} required /><br></br>
            {/* <label className='label1'>Repeat Password</label><br></br>
            <input className='input1' type='password' placeholder='Confirm password'  name='RepeatPassword'   onChange={handleChange}  /><br></br> */}
            

            <button className='but1' type='submit' >Log-in</button>
            {/* <Link to='/Registration1'><button type='submit' className='but1'>submit</button></Link> */}
            {/* <h1>name:{regForm.Name},phone:{regForm.Phone},email:{regForm.Email}</h1> */}
        </form>
        </fieldset>
    </div>
  )
}

export default Signin
