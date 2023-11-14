import React, { useState } from 'react';

const MyForm = () => {
  // State for the input values and validations
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // Alphanumeric and underscores, 3-15 characters
   // Basic email validation
  const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d@$!%*#?&]{8,}$/; // Minimum eight characters, at least one letter, and one number

  // Handlers for input changes
  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
    setIsValidUsername(usernameRegex.test(inputValue));
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

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the validated data, like sending it to a server
    console.log('Validated Data:', { username, password, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          
          onChange={handleUsernameChange}
          style={{ borderColor: isValidUsername ? 'initial' : 'red' }}
        />
      </label>

      

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: isValidPassword ? 'initial' : 'red' }}
        />
      </label>

      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: isValidConfirmPassword ? 'initial' : 'red' }}
        />
      </label>

      <button type="submit" disabled={!isValidUsername || !isValidPassword || !isValidConfirmPassword}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;