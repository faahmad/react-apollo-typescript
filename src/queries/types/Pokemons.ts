/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pokemons
// ====================================================

export interface Pokemons_pokemons {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
}

export interface Pokemons {
  pokemons: (Pokemons_pokemons | null)[] | null;
}

export interface PokemonsVariables {
  first: number;
}
