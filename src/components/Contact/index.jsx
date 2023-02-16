import emailjs from 'emailjs-com';
import "./contact.css"

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9vzks7s', 'template_lxzduvf', e.target, 'sYpQj4MissMdZMwRO')
        .then((result) => {
            console.log(result.text)
            alert("Mensaje Enviado");
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="contact">
            <div className="datosPersonales">
                <i className="bi bi-three-dots icon">Contactame</i>
                <h3>Dejame un Mensaje</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum molestiae sunt.</p>
                <i className="bi bi-telephone"> +54 9 261 667 3537</i>
                <i className="bi bi-envelope-at"> fernandezmariaalexandra27@gmail.com</i>
                <i className="bi bi-geo-alt"> Maipu, Mendoza, Argentina</i>
            </div>
            <div className="formulario">
                <form className='formularioUsuario' onSubmit={handleSubmit}>
                    
                    <div className='inputContainer'>
                        <input id="name" type="text" name="name" placeholder='Nombre' required/>
                    </div>
                    <div className='inputContainer'>
                        <input id="email" type="text" name="email" placeholder='Email' required/>
                    </div>
                    <div className='inputContainer'>
                        <input id="subject" type="text" name="subject" placeholder='Asunto' required/>
                    </div>
                    <div className='inputContainer'>
                        <input id="message" type="text" name="message" placeholder='Mensaje' required/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
  }
  
  export {Contact};

  /*label se usa siempre pero en el ejemplo no lo pide*/
  