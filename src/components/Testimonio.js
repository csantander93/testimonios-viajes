import React from "react";
import "../style-sheets/Testimonio.css";

function Testimonio (props) {
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require(`../images/testimonio-${props.imagen}.jpg`)}
        alt="Foto Jujuy"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
        </p>
        <p className="cargo-testimonio">
        {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  )
}

export default Testimonio