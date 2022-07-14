import React from 'react';

import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <header className='navbar'>
      <div className='container flex-row justify-space-between-lg justify-center align-center'>
        {Auth.loggedIn() ? (
          <Link className='navbar-brand' style={{textDecoration: 'none'}} to='/dashboard'>
            <h1>Habit Tracker</h1>
          </Link>
        ) : (
          <Link className='navbar-brand' style={{textDecoration: 'none'}} to='/'>
            <h1>Habit Tracker</h1>
          </Link>
        )}

        <nav className='justify-content-between'>
          {Auth.loggedIn() ? (
            <>
              <a className='btn btn-secondary' style={{textDecoration: 'none'}} href='/' onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className='btn btn-secondary justify-content-between' style={{textDecoration: 'none'}} to='/login'>Login</Link>
              <Link className='btn btn-secondary justify-content-between' style={{textDecoration: 'none'}} to='/signup'>Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;