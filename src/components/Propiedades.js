import React from "react";

export default function Propiedades(prop){
    return(
        <div>
            <h2>Propiedades</h2>
            <h2>{prop.porDefecto}</h2>
            <ul>
                <li>{prop.cadena}</li>
                <li>{prop.numero}</li>
                <li>{prop.booleano? "verdadero":"falso"}</li>
                <li>{prop.arreglo.join(", ")}</li>
                <li>{prop.objeto.nombre + " " + prop.objeto.apellido}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps ={
    porDefecto: "Las Props"
}