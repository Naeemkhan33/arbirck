import React from 'react';
import { Link } from 'react-router-dom';

const NavbarPrimary = () => {
  return (
    <nav>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center'>
          <div className='logo-container'>
            <Link to='/' className='d-block logo'>
              <img src='/assets/logo.png' alt='...' />
            </Link>
          </div>
          <div className='ms-auto'>
            <ul className='nav gap-4'>
              <li>
                <button
                  type='button'
                  className='btn btn-lg btn-outline-blue border-2 rounded-pill'
                >
                  $0.20 Buy
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='btn btn-lg btn-outline-blue border-2 rounded-pill'
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPrimary;
