import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import "./navbar.css";

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
        <nav className={`navItem ${isOpen && "open"}`} >
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/services">
            Servicios
          </NavLink>
          <NavLink to="/projects">
            Proyectos
          </NavLink>
          <NavLink to="/aboutme">
            Sobre Mi
          </NavLink>
          <NavLink to="/contact">
            Contactos
          </NavLink>  
        </nav>
      </header>
    );
  }
  
  export {Navbar};