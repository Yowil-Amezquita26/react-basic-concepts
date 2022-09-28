import React, { Component } from 'react'
import data from '../helpers/data.json'

function ElementoLsita(props) {
  return (
    <li>
      <a href={props.frameworks.web}>{props.frameworks.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    }
  }
  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLsita key={el.id} frameworks={el} />
          ))}
        </ul>
      </div>
    )
  }
}
