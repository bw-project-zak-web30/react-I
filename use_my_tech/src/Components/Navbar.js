import React from 'react';

import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav>
      <div className='nav-logo'>Logo</div>
      <div className='nav-links'>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
