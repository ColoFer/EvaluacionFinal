import React from "react";
import perfil1 from "../../assets/perfil_1.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import {AiOutlineInstagram, AiFillGithub, AiOutlineWhatsApp} from "react-icons/ai";
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
          <img src={perfil1} alt=""/>
        </div>
        <div className="iconos">
          <p>Sigueme en:   </p>
                <a href="https://github.com/ColoFer"><AiFillGithub/></a>
                <a href="https://www.instagram.com/colofernandez.20/?igshid=YmMyMTA2M2Y%3D"><AiOutlineInstagram/></a>
                <a href="https://api.whatsapp.com/send/?phone=542616673537"><AiOutlineWhatsApp/></a>
        </div>
      </motion.div>
    );
  }
  
  export {Home};