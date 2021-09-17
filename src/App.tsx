import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import { PokeList, DetailView } from './components'
import { Pokemon } from './types/pokemonSchemas'
import { DEFAULT_POKEMON } from './components/constants'


interface AppState {
  pokemon: Pokemon | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
      pokemon: DEFAULT_POKEMON
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
      <>
        <div className="container pt-4">
          <div className="around-pokedex-top d-flex justify-content-center p-2">
            <h1>POKEDEX</h1>
          </div>
          <div className="d-flex justify-content-center p-2">
            <div className="all-pok overflow-auto p-4 App">
              <PokeList handleOnClick={this.handleClick} /> 
            </div>
            <div className="spotlight-pok p-5 App">  
              <DetailView pokemon={this.state.pokemon}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
