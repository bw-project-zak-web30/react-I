import React, {useState} from 'react';
import axios from 'axios';

const Signup = () =>{
    const [signState, setSignState] = useState({
        userType:'',
        name:'',
        userName:'',
        password:'',
        city:'',
        id:''
    })

    
    const handleChange = ev =>{
        ev.preventDefault();

        setSignState({
            ...signState,
            [ev.target.name]:ev.target.value
        })
    }


    const signUpSubmit = ev =>{
        ev.preventDefault();
    }

    return(
        <form onSubmit={signUpSubmit}>
            <select id="userType" name ="userType"
            onChange={handleChange}
            value={signState.userType}>
                <option value="">--Customer or Equipment Owner--</option>
                <option value="customer">Customer</option>
                <option value="equipment owner">Equipment Owner</option>
            </select>
            <input
          label="Name"
          id="name"
          name="name"
          placeholder="Full name with spaces"
          onChange={handleChange}
          value={signState.name}
          required
        />
        <input
          label="City"
          id="city"
          name="city"
          placeholder="Users City"
          onChange={handleChange}
          value={signState.city}
          required
        />
        <input
          label="Username"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={signState.userName}
          required
        />
        <input
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={signState.password}
          required
        />
        <button>Sign Up</button>
        </form>
    )
}

export default Signup;