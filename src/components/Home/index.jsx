import React from "react";
import perfil from "../../assets/pajaro.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import {AiOutlineInstagram, AiFillGithub,AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai";
import  {BsToggleOff} from "react-icons/bs";
import {motion} from "framer-motion";
const Home = () => {
  
    return (
      <motion.div className="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="perfil">
          <h4>Hola! Soy</h4>
          <h1>Maria Alexandra Fernandez</h1>
          <h2>UI/UX Designer & Web Developer</h2>
          <button>
            <NavLink to="/contact">
              Contactame
            </NavLink> 
          </button>
          <div className="experiencia">
            <button className="cambiacolor"><BsToggleOff/></button>
            <p><span> 3 </span> Meses de Experiencia</p>
            <p><span> 3 </span> Proyectos Completados</p>
          </div>
        </div>
        <div>
          <img src={perfil} alt=""/>
        </div>
        <div className="iconos">
          <span><AiOutlineMail/></span>
          <p>Sigueme en:   </p>
                <AiFillGithub/>
                <AiOutlineInstagram/>
                <AiOutlineLinkedin/>
                <AiOutlineWhatsApp/>
        </div>
      </motion.div>
    );
  }
  
  export {Home};