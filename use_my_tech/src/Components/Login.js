import React, {useState} from 'react';

export const Login = () =>{

    return(
        <form onSubmit={loginSubmit}>
        <label htmlFor="username">
          <input label="username"
          type="text"
          name="username"
          value={loginState.username}
          onChange={handleChange}
          placeholder="username"
          />
        </label>

        <label htmlFor="password">
          <input label="password"
          type="password"
          name="password"
          value={loginState.password}
          onChange={handleChange}
          placeholder="Password"
          />
        </label>
        <button>Login</button>
      </form>
    )
}