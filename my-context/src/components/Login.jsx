
import React from 'react';

const Login = ({ login }) => {
  return (
    <div className="container login-form">
      <h1>Login</h1>
  
      <label htmlFor="">Email:</label>
      <input type='text' /><br/>
      <label htmlFor="">Password:</label>
      <input type='password'/><br/>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;


