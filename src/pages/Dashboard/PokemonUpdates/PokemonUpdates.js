import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// UI components
import DashboardCard from '../../../components/DashboardCards/DashboardCard';
import Spinner from '../../../components/Spinner/Spinner';
import PokeballLogo from './PokeballLogo';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const AIRTABLE_API_BASE_URL = 'https://api.airtable.com/v0';
const POKEMON_GO_ACTIVITY_TABLE_ID = 'tblrVOOZwayk82Ffu';
const GET_POKEMON_GO_ACTIVITY_URL = `${AIRTABLE_API_BASE_URL}/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${POKEMON_GO_ACTIVITY_TABLE_ID}`;

const LastCaughtPokemonCard = styled(DashboardCard)`
  position: relative;
  width: 50%;

  .pokemon-sprite {
    position: absolute;
    background-color: #001F3D;
    border: 1px solid ${(props) => props.theme['pokemon-primary-color']};
    border-radius: 8px;
    left: 8px;
    bottom: 8px;
  }

  @media (min-width: 469px) and (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 468px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.span`
  display: inline-block;
  width: 242px;
  color: #F37264;
  font-size: ${(props) => props.theme['font-size-m']};
  font-family: ${(props) => props.theme['font-family-primary']};
  line-height: 1;
`;

const capitalizeFirstLetter = (str = '') => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const getSubHeading = (name, id) => {
  return `${capitalizeFirstLetter(name)} #${id}`;
}

export default function PokemonUpdates () {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    fetch(GET_POKEMON_GO_ACTIVITY_URL, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((data) => {
      const POKEMON_ID = data?.records?.[0]?.fields?.last_caught_pokemon_id || 132;

      fetch(`${POKEAPI_BASE_URL}/${POKEMON_ID}`)
      .then((response) => response.json())
      .then((pokemon) => {
        setLoading(false);
        setPokemon(pokemon);

        console.log(pokemon.sprites.versions['generation-v']['black-white']);
      })
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    })
  }, []);

  const renderPokemonContent = (sprites, error) => {
    if (error) {
      return <ErrorMessage>Team Rocket attacked! Couldn't fetch the data.</ErrorMessage>
    }

    const spriteURL = 
      sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default ||
      sprites?.front_default

    if (spriteURL) {
      return (
        <img
          height='96px'
          width='96px'
          className='pokemon-sprite'
          src={spriteURL}
        />
      );
    }

    return null;
  }

  const { name, id, sprites } = pokemon || {};

  return (
    <LastCaughtPokemonCard
      brand='pokemon'
      heading='Latest capture in Pokémon Go!'
      subHeading={(name && id && !error) ? getSubHeading(name, id) : ''}
      subHeadingPosition='bottom'
      content={isLoading ? <Spinner /> : (
        <>
          {renderPokemonContent(sprites, error)}
        </>
      )}
      metaIcon={<PokeballLogo />}
    />
  );
}