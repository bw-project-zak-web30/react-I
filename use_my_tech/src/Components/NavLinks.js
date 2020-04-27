import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <Fragment>
      <Link to='/'>Home</Link>
      <Link to='/rental'>Rental</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Sign Up</Link>
    </Fragment>
  );
}

export default NavLinks;
