import React, {useState} from 'react';

const Signup = () =>{
    const [signState, setSignState] = useState({
        userType:'',
        name:'',
        userName:'',
        password:'',
        email:''
    })

    

    const signUpSubmit = ev =>{
        ev.preventDefault();
    }

    return(
        <form onSubmit={signUpSubmit}>
            <select id="userType" name ="userType"
            onChange={handleChange}>
                <options value="">--Customer or Equipment Owner--</options>
                <option value="customer">Customer</option>
                <option value="equipment owner">Equipment Owner</option>
            </select>
            <input
          label="Name"
          id="name"
          name="name"
          placeholder="Full name with spaces"
          onChange={handleChange}
          required
        />
        <input
          label="Email"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <input
          label="Username"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <input
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button>Sign Up</button>
        </form>
    )
}