import React from "react";
import "./skills.css";
import myskills from "../../assets/skills.png";
import {AiOutlineLine} from "react-icons/ai";


const Skills = () => {
    return (
      <div className="skills">
            <div className="lenguaje">
              <img src={myskills} alt="" />
            </div>
            <div className="habilidad">
            <span><AiOutlineLine/><p>MIS HABILIDADES</p></span>
                <h2>Lenguajes & Herramientas</h2>
                <p className="text">Tengo conocimentos intermedios de ReactJS, SQL, Bootstrap, HTML, CSS y conociemientos necesarios de Node.js</p>
            </div>
      </div>
    );
  }
  
  export {Skills};