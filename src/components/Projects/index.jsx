import React from "react";
import {AiOutlineLine} from "react-icons/ai";
import "./projects.css";
import proyecto1 from "../../assets/proyecto_1.png";
import proyecto2 from "../../assets/proyecto_2.png";
import proyecto3 from "../../assets/proyecto_3.png";
import {motion} from "framer-motion";

const Projects = () => {
    return (
      <motion.div className="projects" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="titulo">
          <span><AiOutlineLine/><p>MIS PROYECTOS</p></span>
        </div>
        <div className="misproyectos">
          <img src={proyecto1} alt=""/>
          <img src={proyecto2} alt=""/>
          <img src={proyecto3} alt=""/>
        </div>
        <button>
          <a href="http://colofer.github.io">Ver Proyectos</a>
        </button>
      </motion.div>
    );
  }
  
  export {Projects};