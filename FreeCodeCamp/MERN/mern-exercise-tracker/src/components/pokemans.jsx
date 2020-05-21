import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

function PokemonContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 }
  });
  return (
    <div className="container">
      {pokemons &&
        pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
}

export function Pokemon() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh"
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}

export default Pokemon;
