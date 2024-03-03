import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />{' '}
        Bootstrap
      </a>
    </nav>
  );
}

export default Navbar;
