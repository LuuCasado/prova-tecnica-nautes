import React from "react";

import usePokemons from "../../hooks/usePokemons";
import Button from "../../components/global/Button";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const { pokemon, getRandomPokemon, isLoading } = usePokemons();

  return (
    <div className={classes.container}>
      <Button isDisabled={isLoading} onClick={getRandomPokemon}>
        Give me a pokemon
      </Button>

      {pokemon && (
        <div className={classes.pokemonBox}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{pokemon.name.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
