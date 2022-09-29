import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon/";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         // console.log(json)
  //         json.results.forEach((ele) => {
  //           fetch(ele.url)
  //             .then((res) => res.json())
  //             .then((json) => {
  //               //   console.log(json.name)
  //               let pokemon = {
  //                 id: json.id,
  //                 name: json.name,
  //                 avatar: json.sprites.front_default,
  //               };

  //               setPokemons((pokemons) =>[...pokemons,pokemon])
  //               //spreed operator
  //               //con el spreed operator "de lo que ya hay en el state.pokemons,
  //               //con el spreed operator obten una copia del state actual y
  //               //luego lo vas a conbinar con el nuevo objeto pokemon "

  //             });
  //         });
  //       });
  // }, [])

  ///refactorizando el useEffect
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (ele) => {
        let res = await fetch(ele.url),
          json = await res.json();
        //   console.log(json.name)
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
        //spreed operator
        //con el spreed operator "de lo que ya hay en el state.pokemons,
        //con el spreed operator obten una copia del state actual y
        //luego lo vas a conbinar con el nuevo objeto pokemon "
      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {/* {this.state.pokemons.map((el) => <Pokemon key= {el.id} name={el.name} avatar={el.avatar}/>)} */}
      {pokemons.length === 0 ? (
        <h3>Cargando</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
