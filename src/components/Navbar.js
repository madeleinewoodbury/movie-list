import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <i className='fas fa-film'></i> Movie List
        </Link>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/my-list'>
              <i className='fas fa-list'></i> My List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
