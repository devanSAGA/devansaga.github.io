import React, { useState, useEffect } from 'react';
import { POKEMON_DATA } from './pokemon_data';
import {
  PokedexEmptyState,
  PokedexFilters,
  PokedexHeader,
  PokedexRegionFilters,
  PokemonGrid,
  PokemonGridContainer,
  PokemonGridItem,
  PokemonInfo,
  PokemonSprite,
  StyledFootnote,
  StyledPokedex,
  StyledPokedexContainer,
  StyledRadioGroup,
  StyledRadioOption,
  StyledRegionDropdown
} from './styles';
import OpenBallSprite from './open_pokeball.webp';
import BallSprite from './pokeball.webp';

// constants
const POKEMON_STATUS_CAUGHT = 'caught';
const POKEMON_STATUS_UNCAUGHT = 'uncaught';
const POKEMON_CAUGHT_FILTERS = [
  { value: POKEMON_STATUS_CAUGHT, label: (
    <StyledRadioOption>
      <img className='close-ball' src={BallSprite} height='32' width='32' />
      <span className='radio-option__text'>Caught</span>
    </StyledRadioOption>
  )},
  { value: POKEMON_STATUS_UNCAUGHT, label: (
    <StyledRadioOption>
      <img className='open-ball' src={OpenBallSprite} height='36' width='28' />
      <span className='radio-option__text'>Uncaught</span>
    </StyledRadioOption>
  )}
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
  const [caughtStatus, setCaughtStatus] = useState(POKEMON_CAUGHT_FILTERS[0].value);

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
      <StyledPokedex>
        <PokedexHeader>
          <h3 className='pokedex_header--title'>Pokédex</h3>
          <div className='pokedex_header--circles'>
            <div className='circle red-circle' />
            <div className='circle yellow-circle' />
            <div className='circle green-circle' />
          </div>
          <svg width="372" height="20" viewBox="0 0 376 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 18H113.265C118.08 18 122.784 16.5516 126.765 13.843L138.062 6.15701C142.043 3.44842 146.747 2 151.563 2H374" stroke="#9F2E2E" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </PokedexHeader>
        <PokedexFilters>
          <StyledRadioGroup
            options={POKEMON_CAUGHT_FILTERS}
            value={caughtStatus}
            onChange={setCaughtStatus}
            color='pokedex-secondary-color'
          />
          <PokedexRegionFilters>
            <span className='region-dropdown-label'>Region: </span>
            <StyledRegionDropdown onChange={handleRegionSelect}>
              <option value='kanto'>Kanto</option>
              <option value='johto'>Johto</option>
              <option value='hoenn'>Hoenn</option>
              <option value='sinnoh'>Sinnoh</option>
            </StyledRegionDropdown>
          </PokedexRegionFilters>
        </PokedexFilters>
          {pokemonsList.length === 0 ? (
            <PokedexEmptyState>
              <img
                src='https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu-original-cap.png'
                alt='Pikachu'
                height='128'
                width='128'
              />
              <span className='pokedex_emptystate--message'>
                No uncaught pokémon in this region.
              </span>
              <span className='pokedex_emptystate--message'>
                All caught!
              </span>
            </PokedexEmptyState>
          ) : (
            <PokemonGridContainer>
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
            </PokemonGridContainer>
          )}
      </StyledPokedex>
      <StyledFootnote>
        This pokédex tracks my activity in Pokémon GO
      </StyledFootnote>
    </StyledPokedexContainer>
  );
}
