import pajaro from "../../assets/pajaro.jpg"

const AboutMe = () => {
    return (
      <div className="AboutMe">
            <div>
                <i className="bi bi-three-dots icon">Sobre Mi</i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum molestiae sunt.</p>
                <i className="bi bi-record2">Resolucion de Problemas</i>
                <i className="bi bi-record2"></i>
                <i className="bi bi-record2"></i>
                <i className="bi bi-record2"></i>
                <button>Contratame</button>
            </div>
            <div>
                <img src={pajaro} alt=""/>
            </div>
      </div>
    );
  }
  
  export {AboutMe};