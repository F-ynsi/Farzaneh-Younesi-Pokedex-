import { Pokemon } from "../types/pokemonSchemas"

export const FARZANEH_POKE_NAME: string = "FaRzAnEh"
export const PIKACHU: string = "pikachu"
export const DEFAULT_POKEMON: Pokemon = {
    id: 888, 
    name: FARZANEH_POKE_NAME, 
    abilities: [{ability: {name: "js"}}, {ability: {name: "react"}}], 
    types: [{type: {name: "humobot"}}],
    order: 90,
    stats: [{stat: {name: "design"}}],
    moves: [{move: {name: "moon walk"}}],
  }

export const MODAL_CUSTOM_STYLE = {content: {
  width: '40%',
  display: 'flex',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor:'#8FD9A8',
}}  