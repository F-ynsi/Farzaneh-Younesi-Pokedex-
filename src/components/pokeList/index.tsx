import React, { useState, useEffect, MouseEventHandler } from 'react'
import axios from 'axios';
import PokeCell from '../pokeCell'
import './pokeList.css'
import { PokemonsData, RawPokemon } from '../../types/pokemonSchemas'

const PokeList = ({handleOnClick}:{handleOnClick: (name: string)=> void}) => {
  const defaultPokemosData: PokemonsData = {
    count: 1,
    next: "string",
    previous: "string",
    results: []
  }
  const [pokemosData, setPokemonsData]: [PokemonsData, (posts: PokemonsData) => void] = useState(defaultPokemosData)
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true)
  const [error, setError]: [string, (error: string) => void] = React.useState("")

  useEffect(() => {
    axios
        .get<PokemonsData>("https://pokeapi.co/api/v2/pokemon/?limit=100", {
          headers: {
            "Content-Type": "application/json"
          },
        }).then(response => {
          setPokemonsData(response.data)
          setLoading(false)
        }).catch(ex => {
          const error =
          ex !== undefined
            ? "Resource Not found"
            : "An unexpected error has occurred"
          setError(error)
          setLoading(false)
        });
    }, [])
    
  return (
    <section className="poke-list">
      {pokemosData.results.map((rawPokemon: RawPokemon) => {return (<PokeCell data={rawPokemon} handleOnClick={handleOnClick} />)})}
    </section>
)
}

export default PokeList