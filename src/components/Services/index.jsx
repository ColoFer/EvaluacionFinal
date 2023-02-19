import React from "react";
import {CgWebsite} from "react-icons/cg";
import {AiOutlineLine} from "react-icons/ai";
import {TfiLayoutListThumb} from "react-icons/tfi";
import "./services.css";
import {motion} from "framer-motion";

const Services = () => {
    return (
      <motion.div className="services" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="card">
              <div className="card1">
                <span><CgWebsite/></span><h3>Web App</h3>
                <p>Desarrollo aplicaciones web funcionales con React</p>
              </div>
              <div className="card2">
                <span><TfiLayoutListThumb/></span><h3>UI/UX Design</h3>
                <p>Interfaces y experiencias de usuarios intuitivas y responsivas.</p>
              </div>
              <div className="card3">
                <span><TfiLayoutListThumb/></span><h3>Prototyping & WireFraming</h3>
                <p>Esquemado de componentes para un desarrollo rapido y eficiente.</p>
              </div>
            </div>
            <div className="experiencia">
                <span><AiOutlineLine/></span><p style={{marginBottom: "45px"}}>¿QUE OFREZCO?</p>
                <div className="text">
                <h2>Mejor Diseño</h2>
                <h2>Mejor Experiencia</h2>
                <p>Trabajo de forma rápida y eficiente, creando aplicaciones web intuitivas, rápidas y funcionales, asegurandome de cumplir con las expectativas del cliente y los requisitos del ususario.</p>
                </div>
            </div>
      </motion.div>
    );
  }
  
  export {Services};