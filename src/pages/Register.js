import React,{useState} from 'react'

const Register = () => {
    const [username, setUsername] = useState('');

    const [isValidUsername, setIsValidUsername] = useState(true);


    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

    const handleName = (e) => {
        const inputValue = e.target.value;
        setUsername(inputValue);
        setIsValidUsername(usernameRegex.test(inputValue));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the validated data, like sending it to a server
        console.log('Validated Data:', { username });
      };
    
    
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <label>
        Username: </label><br/>
        <input
          type="text"
          
          onChange={handleName}
          style={{ borderColor: isValidUsername ? 'initial' : 'red' }}
        />
     

      
{/* 
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
      </label> */}

      <button type="submit" >
        Submit
      </button>
    </form>
    </div>
  )
}

export default Register
