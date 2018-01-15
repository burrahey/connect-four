import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" activeStyle={{ color: 'teal'}}>Start</NavLink> ||
      <NavLink to="/scoreboard" activeStyle={{ color: 'teal'}}>Scoreboard</NavLink>
    </div>
  )
}

export default NavBar;
