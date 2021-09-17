import React from 'react'
import axios from 'axios';
import PokeCell from '../pokeCell'
import { PokemonsData, RawPokemon } from '../../types/pokemonSchemas'

const PokeList = ({handleOnClick}:{handleOnClick: (name: string)=> void}) => {
  const defaultPokemosData: PokemonsData = {
    count: 1,
    next: "string",
    previous: "string",
    results: []
  }
  const [pokemosData, setPokemonsData]: [PokemonsData, (posts: PokemonsData) => void] = React.useState(defaultPokemosData)
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true)
  const [error, setError]: [string, (error: string) => void] = React.useState("")

  React.useEffect(() => {
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
        })
    }, [])
    
  return (
    <div className="d-flex flex-wrap justify-content-between ">
      {pokemosData.results.map(
        (rawPokemon: RawPokemon) => 
          <PokeCell data={rawPokemon} handleOnClick={handleOnClick} />
      )}
    </div>
  )
}

export default PokeList