import React, { Fragment } from 'react';
import { Links } from 'react-router-dom';

function NavLinks() {
  return (
    <Fragment>
      <Links to='/'>Home</Links>
      <Links to='/rental'>Rental</Links>
      <Links to='/login'>Login</Links>
      <Links to='/register'>Register</Links>
    </Fragment>
  );
}

export default NavLinks;
