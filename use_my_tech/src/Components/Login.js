import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Login = () => {
  const [loginState, setLoginState] = useState({
    username: '',
    password: '',
  });

  const handleChange = ev => {
    setLoginState({
      ...loginState,
      [ev.target.name]: ev.target.value,
    });
  };

  const loginSubmit = ev => {
    ev.preventDefault();

    axios
      .post('', loginState)
      .then(res => {
        console.log('Login Fetch: ', res);
      })
      .catch(err => console.log('Login ERROR: ', err));
  };

  return (
    <div>
    <form onSubmit={loginSubmit}>
      <label htmlFor='username'>
        <input
          label='username'
          type='text'
          name='username'
          value={loginState.username}
          onChange={handleChange}
          placeholder='username'
        />
      </label>

      <label htmlFor='password'>
        <input
          label='password'
          type='password'
          name='password'
          value={loginState.password}
          onChange={handleChange}
          placeholder='Password'
        />
      </label>
      <button>Login</button>
    </form>
    <div>
      <p>Don't have an account? </p><Link to="/register">Sign-Up Here!</Link>
    </div>
</div>
  );
};

export default Login;
