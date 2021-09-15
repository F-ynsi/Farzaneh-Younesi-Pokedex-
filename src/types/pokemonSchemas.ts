interface NamedAPIResource {
    name: string
  }
  
interface PokemonAbility {
  ability: NamedAPIResource
}

export interface Pokemon {
id: number
name: string
abilities: PokemonAbility[]
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