import perfil from "../../assets/pajaro.jpg";
import "./Home.css"

const Home = () => {
    return (
      <div className="Home">
        <div>
          <h4>Hola! Soy</h4>
          <h1>Maria Alexandra Fernandez</h1>
          <h2>Web Developer</h2>
          <button>Ponerse en Contacto</button>
        </div>
        <div>
          <img src={perfil} alt=""/>
        </div>
      </div>
    );
  }
  
  export {Home};