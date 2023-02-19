import emailjs from 'emailjs-com';
import "./contact.css";
import {FiPhone} from "react-icons/fi";
import {AiOutlineMail, AiOutlineLine} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import {motion} from "framer-motion";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9vzks7s', 'template_lxzduvf', e.target, 'sYpQj4MissMdZMwRO')
        .then((result) => {
            alert("Mensaje Enviado");
        }, (error) => {
            alert("Error enviando mensaje");
        });
    }
    return (
        <motion.div className="contact" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="datosPersonales">
                <span><AiOutlineLine/><p>CONTACTAME</p></span>
                <h2>Dejame un Mensaje</h2>
                <p className='text'>Contactame mediante este formulario para haceme una consulta, una propuesta, o posibles dudas que tengas.</p>
                <p className='icon'><span><FiPhone/></span>+54 9 261 667 3537</p>
                <p className='icon'><span><AiOutlineMail/></span>fernandezmariaalexandra27@gmail.com</p>
                <p className='icon'><span><CiLocationOn/></span> Maipu, Mendoza, Argentina</p>
            </div>
            <div className='fondo'>
            <div className="formulario">
                
                <form className='formularioUsuario' onSubmit={handleSubmit}>
                    
                    <div className='inputContainer' >
                        <input id="name" type="text" name="name" placeholder='Nombre' required/>
                    </div>
                    <div className='inputContainer'>
                        <input id="email" type="text" name="email" placeholder='Email' required/>
                    </div>
                    <div className='inputContainer'>
                        <input id="subject" type="text" name="subject" placeholder='Asunto' required/>
                    </div>
                    <div className='inputContainer'>
                        <textarea id="message" type="text" name="message" placeholder='Mensaje' required/>
                    </div>
                    <button type="submit">ENVIAR</button>
                </form>
                </div>
            </div>
        </motion.div>
    );
  }
  
  export {Contact};

  /*label se usa siempre pero en el ejemplo no lo pide*/
  