import React from 'react';

import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <header className=''>
      <div className=''>
        <Link to='/'>
          <h1>Habit Tracker</h1>
        </Link>

        <nav className=''>
          {Auth.loggedIn() ? (
            <a href='/' onClick={logout}>
              Logout
            </a>
          ) : (
            <>
              <Link to='/login'></Link>
              <Link to='/signup'></Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
