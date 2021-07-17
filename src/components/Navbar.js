import React from "react";

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a href='/' className='navbar-brand'>
          My Movie List
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarColor01'>
          <ul class='navbar-nav me-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                My List
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
