import React, { useState, useEffect } from 'react';
import { POKEMON_DATA } from './pokemon_data';
import {
  PokedexEmptyState,
  PokedexFilters,
  PokedexHeader,
  PokemonGrid,
  PokemonGridItem,
  PokemonInfo,
  PokemonSprite,
  StyledPokedexContainer,
  StyledRadioGroup,
  StyledRegionDropdown
} from './styles';

// constants
const POKEMON_STATUS_CAUGHT = 'caught';
const POKEMON_STATUS_UNCAUGHT = 'uncaught';
const POKEMON_FILTER_OPTIONS = [
  { value: POKEMON_STATUS_CAUGHT, label: 'Caught'},
  { value: POKEMON_STATUS_UNCAUGHT, label: 'Uncaught'}
];
const POKEMON_REGION_DATA = {
  'kanto': {
    uncaught: [],
    firstPokemonIndex: 0,
    lastPokemonIndex: 151, 
  },
  'johto': {
    uncaught: [201, 239],
    firstPokemonIndex: 151,
    lastPokemonIndex: 251,
  },
  'hoenn': {
    uncaught: [321, 357, 367, 369],
    firstPokemonIndex: 251,
    lastPokemonIndex: 386
  },
  'sinnoh': {
    uncaught: [413, 423, 462, 469, 476, 477, 479, 489, 490],
    firstPokemonIndex: 386,
    lastPokemonIndex: 492
  }
};
const POKEMON_SPRITE_BASE_URL = 'https://img.pokemondb.net/sprites/diamond-pearl/normal/';

// utils functions
const capitalizeFirstLetter = (str = '') => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const formatPokemonIndex = (index) => {
  if (index < 10) {
    return '#00' + index;
  } else if (index >=10 && index <= 99) {
    return '#0' + index;
  }

  return '#' + index;
}

export default function Pokedex() {
  const [caughtPokemons, setCaughtPokemons] = useState([]);
  const [uncaughtPokemons, setUncaughtPokemons] = useState([]);
  const [region, setRegion] = useState('kanto');
  const [caughtStatus, setCaughtStatus] = useState(POKEMON_FILTER_OPTIONS[0].value);

  useEffect(() => {
    const currentRegionData = POKEMON_REGION_DATA[region];
    const regionWiseFilteredPokemons = POKEMON_DATA
      .slice(currentRegionData.firstPokemonIndex, currentRegionData.lastPokemonIndex)
    
      const updatedCaughtPokemons = [], updatedUncaughtPokemons = [];
      for (const pokemon of regionWiseFilteredPokemons) {
        if (currentRegionData.uncaught.includes(pokemon.id)) {
          updatedUncaughtPokemons.push(pokemon);
        } else {
          updatedCaughtPokemons.push(pokemon);
        }
      }
      
    setCaughtPokemons(updatedCaughtPokemons);
    setUncaughtPokemons(updatedUncaughtPokemons);
  }, [caughtStatus, region]);

  const handleRegionSelect = (event) => {
    const newSelectedRegion = event.target.value;
    setRegion(newSelectedRegion);
  }

  const pokemonsList = caughtStatus === POKEMON_STATUS_CAUGHT ? caughtPokemons : uncaughtPokemons;

  return (
    <StyledPokedexContainer>
      <PokedexHeader>
        <h3 className='pokedex_header--title'>Pokédex</h3>
        <div className='pokedex_header--circles'>
          <div className='circle red-circle' />
          <div className='circle yellow-circle' />
          <div className='circle green-circle' />
        </div>
      </PokedexHeader>
      <PokedexFilters>
        <StyledRadioGroup
          options={POKEMON_FILTER_OPTIONS}
          value={caughtStatus}
          onChange={setCaughtStatus}
          color='pokedex-secondary-color'
        />
        <StyledRegionDropdown onChange={handleRegionSelect}>
          <option value='kanto'>Kanto</option>
          <option value='johto'>Johto</option>
          <option value='hoenn'>Hoenn</option>
          <option value='sinnoh'>Sinnoh</option>
        </StyledRegionDropdown>
      </PokedexFilters>
        {pokemonsList.length === 0 ? (
          <PokedexEmptyState>
            <span className='pokedex_emptystate--message'>
              No uncaught pokémon in this region.
            </span>
            <span className='pokedex_emptystate--message'>
              All caught!
            </span>
          </PokedexEmptyState>
        ) : (
          <PokemonGrid>
          {pokemonsList.map((pokemon) => {
            return (
              <PokemonGridItem key={pokemon.id}>
                <PokemonSprite src={`${POKEMON_SPRITE_BASE_URL}${pokemon.name}.png`} />
                <PokemonInfo>
                  <span className='pokemon_name'>{capitalizeFirstLetter(pokemon.name)}</span>
                  <span className='pokemon_index'>{formatPokemonIndex(pokemon.id)}</span>
                </PokemonInfo>
              </PokemonGridItem>
            );
          }
          )}
          </PokemonGrid>
        )}
    </StyledPokedexContainer>
  );
}
