import React, { useState, useEffect, MouseEvent } from 'react'
import axios from 'axios'
import './pokeCell.css'
import { Pokemon, RawPokemon } from '../../types/pokemonSchemas'


const PokeCell = ({data, handleOnClick}:{data: RawPokemon, handleOnClick: (name: string) => void}) => {
    const defaultPokemon: Pokemon = {id: 1, name: "bulbasaur", abilities: []}
    const [pokemon, setPokemon]: [Pokemon, (pokemon: Pokemon) => void] = useState(defaultPokemon);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = React.useState("");

    useEffect(() => {
          axios
          .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${data.name}`, {
            headers: {
              "Content-Type": "application/json"
            },
          }).then(response => {
            setPokemon(response.data);
            setLoading(false);
          }).catch(ex => {
            const error =
            ex !== undefined
              ? "Resource Not found"
              : "An unexpected error has occurred";
            setError(error);
            setLoading(false);
          })
      
        }, [])


    return <div onClick={()=> handleOnClick(pokemon.name)} className="poke-cell">
        <div>{pokemon.id} - {pokemon.name}</div>
        {/* <img src={`http://img.pokemondb.net/sprites/black-white/anim/normal/${pokeName}.gif`}></img> */}
        <img src={`http://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}.png`}></img>
    
    </div>
}

export default PokeCell