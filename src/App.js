import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros viajeros respecto a los distintos lugares que visitaron en la Argentina</h1>
        <Testimonio
          nombre="Cristian Santander & Yanet Mendoza"
          pais="Argentina"
          imagen="jujuy"
          cargo="Viajeros de Turismo.com"
          empresa="CHEVALIER"
          testimonio="Jujuy, Argentina, es un tesoro cultural entre montañas, donde la Quebrada de Humahuaca revela la riqueza de su historia y la calidez de su gente. Cada rincón de Jujuy es una ventana a la autenticidad y tradiciones que perduran." />

        <Testimonio
          nombre="Johanna Mendoza & Cristian S."
          pais="Argentina"
          imagen="mendoza"
          cargo="Viajeros de Turismoparatodos.com"
          empresa="PLATABUS"
          testimonio="San Rafael, en Mendoza, es un oasis de tranquilidad y belleza, rodeado de viñedos y montañas. Sus paisajes te invitan a explorar la naturaleza mientras disfrutas de los exquisitos vinos locales. En San Rafael, la armonía entre el entorno y la hospitalidad crea una experiencia inigualable." />

        <Testimonio
          nombre="Cristian Santander & Joha Mendoza"
          pais="Argentina"
          imagen="misiones"
          cargo="Viajeros de TurismoCiudad.com.ar"
          empresa="EXPRESO DEL NORTE"
          testimonio="Iguazú, en Misiones, Argentina, es un paraíso natural que cautiva con la majestuosidad de las Cataratas del Iguazú y su exuberante selva. La belleza única de este rincón te sumerge en un mundo de asombro y conexión con la naturaleza, creando recuerdos inolvidables." />
      </div>
    </div>
  );
}

export default App;
