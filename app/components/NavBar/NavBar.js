import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = (props) => {
  const { user, handleLogout } = props;

  return (
    <div className='navBar'>
      <NavLink activeClassName='selected' to='/'>Home</NavLink>
      { userStatus(user, handleLogout) }
      <NavLink activeClassName='selected' to='/signup'>Signup</NavLink>
    </div>
  );
}

const userStatus = (user, handleLogout) => {
  let userArray = Object.keys(user)

  if (!userArray.length) {
    return (
      <NavLink activeClassName='selected' to='/login'>Login</NavLink>
    )
  }
  else {
    return (
     <NavLink activeClassName="selected"
              to='/login'
              onClick={ () => {handleLogout()} }>Logout</NavLink>

   )
  }
}
