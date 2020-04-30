import React from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

import '../styles/navbar.css';

const Navbar = props => {
  const history = useHistory();

  const signOutHandler = evt => {
    evt.preventDefault();
    localStorage.clear();
    history.push('/login');
    props.getProfile();
  };

  return (
    <nav>
      <div className='nav-logo'>
        <img
          src='/img/background-material-design-for-smart-tech-logo-png_87835.jpg'
          alt=''
        />
      </div>
      <div className='nav-links'>
        <a href='https://usemytechstuff2.netlify.app/'>Home</a>
        <Link to='/rentals'>Rental</Link>
        {/* if logged in show these links */}
        <Link to='/myequipment'>My Equipment</Link>

      {localStorage.getItem('token') !== null ?  <a href='' onClick={signOutHandler}>
          Sign Out
        </a> : <> <Link to='/login'>Login</Link>
        <Link to='/register'>Sign Up</Link> </>}

      </div>
    </nav>
  );
}

export default Navbar;
