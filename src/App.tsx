import * as React from 'react'
import { Query } from 'react-apollo'
import pokemonsQuery from './queries/pokemonsQuery'
import { Pokemons, PokemonsVariables } from './queries/types/Pokemons'

class PokemonsQuery extends Query<Pokemons, PokemonsVariables> {}

class App extends React.Component {
  render() {
    return (
      <PokemonsQuery query={pokemonsQuery} variables={{ first: 10 }}>
        {({ data }) => (
          <React.Fragment>
            <h1>Pokemons</h1>
            <code>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
          </React.Fragment>
        )}
      </PokemonsQuery>
    )
  }
}

export default App
