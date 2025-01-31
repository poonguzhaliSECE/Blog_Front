import React, { useState } from 'react';
import '../css/RegistrationPage.css';
import {Link,useNavigate } from "react-router-dom";
const RegistrationPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); 
    
    const navigate = useNavigate();
    async function register(e) {
        e.preventDefault();  //Avoid page referesh
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username: userName, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.status === 200) {
            setMessage('Registration Successful!');
            setMessageType('success');
            setTimeout(() => navigate('/login'), 2000);

        }       
        
        else if(response.status===400){
            setMessage('User AlreadyExist');
            setMessageType('error');
        }
        else {
            setMessage('Registration Failed. Please try again.');
            setMessageType('error');
        }
    }
    

    return (
    
            <form className="signup" id="signup-form" onSubmit={register}>
                 <div className="registration-container">
            {message && (
                <div className={`alert ${messageType}`}>
                    {message}
                </div>
            )}
            <fieldset id='field'>
                    <legend><h2>SIGN UP!</h2></legend>
                    <label>User Name:</label>
                    <input 
                        type='text' 
                        placeholder='User Name' 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                    />

                    <label id="password">Password: </label>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <button  type='submit'>Signup</button>
                    <pre id='pr'> Already have an account?  <Link to="/login">Login in</Link></pre>
                   
                </fieldset>
                </div>
            </form>
            

    );
}

export default RegistrationPage;
