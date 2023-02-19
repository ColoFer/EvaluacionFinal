import React from "react";
import "./aboutme.css";
import { NavLink } from "react-router-dom";
import {AiOutlineLine} from "react-icons/ai";
import {BiRadioCircleMarked} from "react-icons/bi";
import pajaro from "../../assets/pajaro.jpg";
import {motion} from "framer-motion";

const AboutMe = () => {
    return (
      <motion.div className="aboutme" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <div className="presentacion">
            <span><AiOutlineLine/><p>SOBRE MI</p></span>
            <p className="text">Soy una estudiante de desarrolladora full stack con React y Node e Ingenieria en Sistemas de Informacion de Mendoza, Argentina. Tengo 21 años de edad.</p>
            <ul className="lista">
              <li className="itemLista"><span className="boton"><BiRadioCircleMarked/></span><p className="textoItemLista">Resolucion de Problemas</p></li>
              <li className="itemLista"><span className="boton"><BiRadioCircleMarked/></span><p className="textoItemLista">Trabajo bien bajo presion</p></li>
              <li className="itemLista"><span className="boton"><BiRadioCircleMarked/></span><p className="textoItemLista">Rápido aprendizaje</p></li>
              <li className="itemLista"><span className="boton"><BiRadioCircleMarked/></span><p className="textoItemLista">Creatividad en la resolucion de problemas</p></li>
            </ul>
            <button>
              <NavLink to="/contact">
                Contrátame
              </NavLink>
            </button>
          </div>
          <div className="imagenes">
            <img className="img1" src={pajaro} alt=""/>
            <img className="img2" src={pajaro} alt=""/>
          </div>
      </motion.div>
    
    );
  }
  
  export {AboutMe};