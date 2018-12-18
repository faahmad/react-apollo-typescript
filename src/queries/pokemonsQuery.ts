import { gql } from 'apollo-boost'

export default gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
    }
  }
`
