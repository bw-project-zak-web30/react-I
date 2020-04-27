import React, { useState } from 'react';
import axios from 'axios';

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
  );
};

export default Login;
