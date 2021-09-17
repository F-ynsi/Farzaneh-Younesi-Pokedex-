interface NamedAPIResource {
    name: string
  }
  
interface PokemonAbility {
  ability: NamedAPIResource
}

interface PokemonType {
  type: NamedAPIResource
}

interface PokemonStat {
  stat: NamedAPIResource
}

interface PokemonMove {
  move: NamedAPIResource
}

export interface Pokemon {
id: number
name: string
abilities: PokemonAbility[]
types: PokemonType[]
order: number
stats: PokemonStat[]
moves: PokemonMove[]
}

export interface RawPokemon {
  name: string
  url: string
}

export interface PokemonsData {
  count: number
  next: string
  previous: string
  results: RawPokemon[]
}