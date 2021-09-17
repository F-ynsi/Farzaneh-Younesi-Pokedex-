import React from 'react'
import axios from 'axios'
import './pokeCell.css'
import { Pokemon, RawPokemon } from '../../types/pokemonSchemas'
import { DEFAULT_POKEMON } from '../constants'

export interface PokeCellProps {
  data: RawPokemon 
  handleOnClick: (name: string) => void
}

const PokeCell = ({data, handleOnClick}: PokeCellProps) => {
    const [pokemon, setPokemon]: [Pokemon, (pokemon: Pokemon) => void] = React.useState(DEFAULT_POKEMON)
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true)
    const [error, setError]: [string, (error: string) => void] = React.useState("")

    React.useEffect(() => {
          axios
          .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${data.name}`, {
            headers: {
              "Content-Type": "application/json"
            },
          }).then(response => {
            setPokemon(response.data)
            setLoading(false)
          }).catch(ex => {
            const error =
            ex !== undefined
              ? "Resource Not found"
              : "An unexpected error has occurred"
            setError(error)
            setLoading(false)
          })
      
        }, [])

    return (
      <div onClick={()=> handleOnClick(pokemon.name)} className="poke-cell shadow p-4 mb-5 rounded">
        <img src={`http://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}.png`}></img>
        <div className="d-flex justify-content-center">
          <p >#{pokemon.name}</p>
        </div>
      </div>
    )
}

export default PokeCell