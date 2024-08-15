import styled from 'styled-components';
import RadioGroup from '../../../components/RadioGroup/RadioGroup';

export const PokedexHeader = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;

  & .pokedex_header--title {
    font-family: ${({ theme }) => theme['font-family-pageHeading']};
    font-size: ${({ theme }) => theme['font-size-l']};
    color: ${({ theme }) => theme['content-color-primary']};
    line-height: 1;
  }

  & .pokedex_header--circles {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 8px;
    }

    & .circle {
      border-radius: 999px;
      height: 12px;
      width: 12px;
    }

    & .red-circle { background-color: #FF8A8A; }
    & .yellow-circle { background-color: #FFB22C; }
    & .green-circle { background-color: #A2CA71; }
  }
`;

export const PokedexFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const PokemonSprite = styled.img`
  height: 64px;
  width: 64px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .pokemon_name {
    font-size: ${({ theme }) => theme['font-size-s']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    line-height: 1.2;
    color: ${({ theme }) => theme['content-color-primary']};
  }

  & .pokemon_index {
    font-size: ${({ theme }) => theme['font-size-xs']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    line-height: 1.2;
    color: #7b0000;
  }

  & span {
    display: inline-block;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 8px;
  grid-column-gap: 8px;
`;

export const PokemonGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme['pokedex-border-color']};
  border-radius: 8px;
  background-color: ${({ theme }) => theme['pokedex-secondary-color']};
`;

export const PokedexEmptyState = styled.div`
  width: 100%;
  margin-top: 140px;
  text-align: center;

  & .pokedex_emptystate--message {
    display: inline-block;
    font-size: ${({ theme }) => theme['font-size-s']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    color: ${({ theme }) => theme['content-color-primary']};
    line-height: 1.2;
  }
`;

export const StyledPokedexContainer = styled.div`
  width: 396px;
  height: 492px;
  
  padding: 12px;
  position: relative;
  border: 4px solid ${({ theme }) => theme['pokedex-border-color']};
  border-radius: 8px;
  background-color: ${(props) => props.theme['pokedex-primary-color']};
  overflow-y: scroll;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  padding: 4px;
  border: 2px solid ${({ theme }) => theme['pokedex-border-color']};
  border-radius: 8px;
  user-select: none;

  & .glider {
    width: 68px;
    height: 20px;
    border-radius: 4px;
  }

  & label {
    height: 20px;
    width: 68px;
    color: #7b0000;
    font-size: ${({ theme }) => theme['font-size-xs']};
  }
`;

export const StyledRegionDropdown = styled.select`
  border: none;
  outline: none;
  background-color: transparent;
  display: inline-block;
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['font-size-xs']};
  font-family: ${(props) => props.theme['font-family-secondary']};
`;