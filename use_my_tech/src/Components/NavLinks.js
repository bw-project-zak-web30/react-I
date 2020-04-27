import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <Fragment>
      <Link to='/'>Home</Link>
      <Link to='/rentals'>Rental</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </Fragment>
  );
}

export default NavLinks;
