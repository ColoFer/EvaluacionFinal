import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import "./navbar.css"

const Navbar = () => {

  const [isOpen, setOpen]= useState(false)
  

  return (
      <header>
        <div className="titulo">
            <NavLink to="/">
            Portfolio.
            </NavLink>
        </div>
        <div className="navToggle" onClick={() => setOpen(!isOpen)}>
              <GiHamburgerMenu />
            </div>
        <nav className={`navItem ${isOpen && "open"}`}>
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/services">
            Services
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/aboutme">
            AboutMe
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>  
        </nav>
      </header>
    );
  }
  
  export {Navbar};