import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"
import {AiOutlineInstagram, AiFillGithub,AiOutlineLinkedin, AiOutlineWhatsApp} from "react-icons/ai"


const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="titulo">
                <NavLink to="/">
                    Portfolio.
                </NavLink>
            </div>
            <div className="iconos">
                <a href="https://github.com/ColoFer"><AiFillGithub/></a>
                <a href="https://www.instagram.com/colofernandez.20/?igshid=YmMyMTA2M2Y%3D"><AiOutlineInstagram/></a>
                <a href="https://api.whatsapp.com/send/?phone=542616673537"><AiOutlineWhatsApp/></a>
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
            </div>
            <div className="line">
                <p></p>
            </div>
            <p>@ 2023 | Design By Fernandez Maria Alexandra</p>
        </>
    );
  }
  
  export {Footer};