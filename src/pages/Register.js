import React, { useState } from 'react';
import './Registration.css'
import { useNavigate } from 'react-router-dom';
// import validator from 'validator';
const Register = () => {
  // State for the input values and validations
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);


  const usernameRegex = /^[a-zA-Z_]{3,15}$/; 
  
  const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/; 

  
  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
    
    setIsValidUsername(usernameRegex.test(inputValue))
    
  };

 

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    setIsValidPassword(passwordRegex.test(inputValue));
  
  };

  const handleConfirmPasswordChange = (e) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
    setIsValidConfirmPassword(
      passwordRegex.test(inputValue) && inputValue === password

    );
    
   
  };
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/Signin',{state:{submitteddata: { username, password, confirmPassword }}});
    // console.log('Validated Data:', { username, password, confirmPassword });
  };

  return (
    <div className='divison1'>
    <fieldset>
    <form className='f1' onSubmit={handleSubmit}>
    <legend className='l1'>Registration Form</legend>
      <label className='label1'>
        Username:<br></br>
        <input
          type="text"
          className='input1'
          required
          onChange={handleUsernameChange}
          style={{ borderColor: isValidUsername ? 'initial' : 'red' }}
        /><br></br>
      </label><br></br>

      

      <label className='label1'>
        Password:<br></br>
        <input
          type="password"
          value={password}
          required
          className='input1'
          onChange={handlePasswordChange}
          style={{ borderColor: isValidPassword ? 'initial' : 'red' }}
        /><br></br>
      </label><br></br>

      <label className='label1'>
        Confirm Password:<br></br>
        <input
          type="password"
          className='input1'
          required
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: isValidConfirmPassword ? 'initial' : 'red' }}
        /><br></br>
      </label><br></br>

      <button type="submit" className='but1' disabled={!isValidUsername || !isValidPassword || !isValidConfirmPassword}>
        Submit
      </button>
    </form>
    </fieldset>
    
    </div>
  );
};

export default Register;