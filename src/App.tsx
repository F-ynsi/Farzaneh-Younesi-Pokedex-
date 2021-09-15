import React, { Component, MouseEventHandler, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'
import { PokeList, DetailView } from './components'
import { Pokemon } from './types/pokemonSchemas'


export interface AppState {
  pokemon: Pokemon | undefined;
}

class App extends Component<any, AppState> {
    state = {
      pokemon: {
        id: 1,
        name: "bulbasaur",
        abilities: [],
      }
    }

    handleClick = (name: string) => {
      axios
          .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            headers: {
              "Content-Type": "application/json"
            },
          }).then(response => {
            const pokemon = response.data
            this.setState({pokemon});
          }).catch(ex => {
            const error =
            ex !== undefined
              ? "Resource Not found"
              : "An unexpected error has occurred";
          })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.pokemon)}
        <PokeList handleOnClick={this.handleClick} />
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App
