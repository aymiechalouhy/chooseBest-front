import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        {/* <a href="#about">About</a> */}
        <a href="#contact">Contact</a>
        <input type="text" className="navy" placeholder="Search By Price: " />
          <button type="submit"><i className="fa fa-search"></i></button>
      </div>
    </>
  )
}