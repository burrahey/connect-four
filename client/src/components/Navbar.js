import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <span><NavLink to="/" activeStyle={{ color: 'teal'}}>Start A New Game</NavLink> || </span>
      <span><NavLink to="/scoreboard" activeStyle={{ color: 'teal'}}>Scoreboard</NavLink> </span>
    </div>
  )
}

export default NavBar;
