import React, { Component } from "react";

class Reloj extends Component{

    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props)
        console.log(0,"el componente se inicializa, aun no esta en el dom");

        
        this.state={
            fecha: new Date().toLocaleTimeString(),
            visible:false
        }
        this.temporizador = null
    }

    componentDidMount(){ 
        console.log(1,"El componente ya se encuentra en el dom");
    }
    componentDidUpdate(prevProps, prevState){
        console.log(2,"El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

    tictac = () =>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000)
    }

    Start = ()=>{ 
        this.tictac()
        this.setState({
            visible:true
        })
    }
    Stop = ()=>{
        clearInterval(this.temporizador)
        this.setState({
            visible:false
        })
    }
    render(){
        console.log(4,"El componete se redibuja");
        return(
            <>{/*&& es operador de corto Circuito */}
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                
                <button onClick={this.Start}>Start</button>
                <button onClick={this.Stop}>Stop</button>
            </>
        )
    }
}