import React, { useEffect, useState } from 'react'
//Siempre tener useEfect con segundo paramentro
export default function ScroolHooks(){
    const [scrollY, setscrollY] = useState(0)

    // En este caso el useEffect seria la fase de actualizacion
    useEffect(() =>{
        console.log("Moviendo el Scroll");

        const detectarScrool = ()=>{
            setscrollY(window.pageYOffset);
        }

        window.addEventListener("scroll", detectarScrool)
        return ()=>{
            window.removeEventListener("scroll", detectarScrool)
            console.log("Fase de Desmontaje");
        }
    })
 
    useEffect(() => {
        console.log("Fase de Montaje");
    },[])

    //Este sera como un ComponentDidUpdate porque no tiene el segundo parametro
    useEffect(() =>{
        console.log("Fase de Actualizacion");
    })

    // este seria si fuera la fase de desmontaje
    useEffect(() =>{
        
        return() =>{
            
            console.log("Fase de Desmontaje");
        }
    })
    
    return(
        <>
            <h2>Hooks - useEfect y el Ciclo de Vida</h2>
            <p>Scrool Y del navegador {scrollY}px</p>
        </>
    )
}