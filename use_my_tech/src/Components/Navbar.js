import React from 'react';
import NavLinks from './NavLinks';
import { Links } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

import '../styles/navbar.css';

function Navbar() {
  const history = useHistory();

  const signOutHandler = evt => {
    evt.preventDefault();
    localStorage.clear();
    history.push('/login');
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
        <NavLinks />
        {/* Drop Down Menu Once logged in */}
        {/* if logged in show these links */}
        <a href='' onClick={signOutHandler}>
          Sign Out
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
