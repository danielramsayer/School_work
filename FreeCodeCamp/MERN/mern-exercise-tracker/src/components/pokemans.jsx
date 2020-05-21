import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container, Row, Col } from "react-bootstrap";
import "./checkAndRun.scss";

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

function PokemonComponent({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {pokemon.attacks.special.map(attack => (
          <span key={`${attack.name}-${attack.damage}`}>
            <p>{attack.name}</p>
            {attack.damage}hp
            <p></p>
          </span>
        ))}
      </div>
    </div>
  );
}

function PokemonContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 25 }
  });
  return (
    <div className="container1">
      {pokemons &&
        pokemons.map(pokemon => (
          <PokemonComponent key={pokemon.id} pokemon={pokemon} />
        ))}
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
