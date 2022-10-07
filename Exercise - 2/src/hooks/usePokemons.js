import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import { getRandomIndex } from "../utils/helpers";

// Test env:
// REACT_APP_POKEMON_DATA_API = https://pokeapi.co/api/v2/pokemon

const retryError = "ERR_BAD_REQUEST";

const usePokemons = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonNumber, setPokemonNumber] = useState(-1);
  const [maxPokemons, setMaxPokemons] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomPokemon = useCallback(() => {
    setPokemonNumber(getRandomIndex(maxPokemons));
  }, [maxPokemons, setPokemonNumber]);

  useEffect(() => {
    const getPokemonCount = async () => {
      try {
        const { data: pokemonsData } = await axios.get(
          process.env.REACT_APP_POKEMON_DATA_API
        );
        setMaxPokemons(pokemonsData.count);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemonCount();
  }, [setMaxPokemons]);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        setIsLoading(true);
        const { data: pokemonData } = await axios.get(
          `${process.env.REACT_APP_POKEMON_DATA_API}/${pokemonNumber}`
        );
        setPokemon(pokemonData);
      } catch (error) {
        if (error.code === retryError) {
          getRandomPokemon();
        } else {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (pokemonNumber !== -1) {
      getPokemonData();
    }
  }, [setPokemon, getRandomPokemon, pokemonNumber]);

  return { pokemon, isLoading, getRandomPokemon };
};

export default usePokemons;
