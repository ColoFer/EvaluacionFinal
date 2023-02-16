import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"
import {AiOutlineInstagram, AiFillGithub,AiOutlineLinkedin, AiOutlineWhatsApp} from "react-icons/ai"


const Footer = () => {
    return (
        <div className="Footer">
            <div className="titulo">
                <NavLink to="/">
                    <h2>Portfolio.</h2>
                </NavLink>
            </div>
            <div className="iconos">
                <AiFillGithub/>
                <AiOutlineInstagram/>
                <AiOutlineLinkedin/>
                <AiOutlineWhatsApp/>
            </div>
            <nav className="menu">
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
            <div className="line">
                <p>hola</p>
            </div>
            <p>@2023 | Desing </p>
        </div>
    );
  }
  
  export {Footer};