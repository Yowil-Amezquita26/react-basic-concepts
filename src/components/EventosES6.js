import React, { Component } from 'react'

export class EventosES6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0,
    }
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  sumar(e) {
    console.log('Sumando')
    console.log(this)
    this.setState({
      contador: this.state.contador + 1,
    })
  }
  restar(e) {
    console.log('Sumando')
    console.log(this)
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  }

  //Arrow Function
  sumar = (e) => {
    console.log('Sumando')
    console.log(this)
    this.setState({
      contador: this.state.contador + 1,
    })
  }
  restar = (e) => {
    console.log('Sumando')
    console.log(this)
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

// function Boton(props){
//     return(
//         <div>
//             <button onClick={props.myOnClick}>Boton Hecho Componente</button>
//         </div>
//     )
// }

// const Boton = (props) => <button onClick={props.myOnClick}>Boton Hecho Componente</button>

//Destructurando para no tener que siempre poner "props."
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Boton Hecho Componente</button>

export class MasSobreEventos extends Component {
  //SynntheticBaseEvent and EventNative???
  handleClick = (e, msg) => {
    console.log(e)
    console.log(e.nativeEvent)
    console.log(e.target)
    console.log(e.nativeEvent.target)
    console.log(msg);
  }
  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, 'hola pasasndo parametros desde un evento')
          }
        >
          Saludar
        </button>
        {/*Evento Personalizado*/}
        <Boton myOnClick= {(e) =>
            this.handleClick(e, 'hola pasasndo parametros desde un evento') }/>
      </div>
    )
  }
}
