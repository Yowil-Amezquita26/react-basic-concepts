import React, { Component } from 'react'

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name}></img>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  }
  // Usando componentDidMount en vez del constructor porque el componente no esta en el Dom todavia
  // Revisar sobre el ciclo de vida de los componentes
  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        json.results.forEach((ele) => {
          fetch(ele.url)
            .then((res) => res.json())
            .then((json) => {
            //   console.log(json.name)
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              }

              //spreed operator
              //con el spreed operator "de lo que ya hay en el state.pokemons, 
              //con el spreed operator obten una copia del state actual y 
              //luego lo vas a conbinar con el nuevo objeto pokemon "
              let pokemons = [...this.state.pokemons, pokemon]
              console.log(pokemons);
              //usando el shorthand de los objetos, 
              //porque tienen el mismo nombre(variable de estado y la variable en el fetch)
              //no es necesario poner en el setState pokemons:pokemons
              this.setState({pokemons})
              //no muestra todos los pokemons
              //spread operator allows us to quickly copy all or part of an existing array or object
            })
        })
      })
  }
  render() {
    return (
      <>
        <h2>Peticiones Asincronas en Componentes de Clase</h2>
        {/* {this.state.pokemons.map((el) => <Pokemon key= {el.id} name={el.name} avatar={el.avatar}/>)} */}
        {this.state.pokemons.length === 0?
        (<h3>Cargando</h3>
        ):
        (this.state.pokemons.map((el) => <Pokemon key= {el.id} name={el.name} avatar={el.avatar}/>))}
      </>
    )
  }
}
