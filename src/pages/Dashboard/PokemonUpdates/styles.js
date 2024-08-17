import styled from 'styled-components';
import RadioGroup from '../../../components/RadioGroup/RadioGroup';

export const PokedexHeader = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

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

  & svg {
    position: absolute;
    top: 36px;
    left: -4px;
  }
`;

export const PokedexFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const PokedexRegionFilters = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  & .region-dropdown-label {
    font-size: ${({ theme }) => theme['font-size-xs']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    color: ${({ theme }) => theme['pokedex-tertiary-color']};
    line-height: 8px;
  }
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
    text-align: center;
    font-size: ${({ theme }) => theme['font-size-s']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    line-height: 1.2;
    color: ${({ theme }) => theme['content-color-primary']};
  }

  & .pokemon_index {
    font-size: ${({ theme }) => theme['font-size-xs']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    line-height: 1.2;
    color: ${({ theme }) => theme['pokedex-tertiary-color']};
  }

  & span {
    display: inline-block;
  }
`;

export const PokemonGridContainer = styled.div`
  height: 496px;
  overflow-y: scroll;
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
  margin-top: 96px;
  text-align: center;

  & img {
    margin-bottom: 8px;
  }

  & .pokedex_emptystate--message {
    display: inline-block;
    font-size: ${({ theme }) => theme['font-size-s']};
    font-family: ${({ theme }) => theme['font-family-secondary']};
    color: ${({ theme }) => theme['content-color-primary']};
    line-height: 1.2;
  }
`;

export const StyledPokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPokedex = styled.div`
  position: relative;
  width: 372px;
  height: 628px;
  padding: 12px 8px;
  border: 4px solid ${({ theme }) => theme['pokedex-border-color']};
  border-radius: 8px;
  background-color: ${(props) => props.theme['pokedex-primary-color']};
  @media (max-width: 459px ) {
    width: 100%;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  padding: 4px;
  border: 2px solid ${({ theme }) => theme['pokedex-border-color']};
  border-radius: 8px;
  user-select: none;

  & .glider {
    width: 92px;
    height: 28px;
    border-radius: 4px;
  }

  & label {
    height: 28px;
    width: 92px;
    color: ${({ theme }) => theme['pokedex-tertiary-color']};
    font-size: ${({ theme }) => theme['font-size-xs']};
  }
`;

export const StyledRadioOption = styled.span`
  display: flex;
  align-items: center;

  & img.close-ball {
    margin-bottom: 2px;
  }

  & .radio-option__text {
    margin-right: 8px;
  }  
`;

export const StyledRegionDropdown = styled.select`
  border: none;
  outline: none;
  background-color: transparent;
  display: inline-block;
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['font-size-s']};
  font-family: ${(props) => props.theme['font-family-secondary']};
`;

export const StyledFootnote = styled.div`
  margin-top: 4px;
  font-size: 14px;
  font-family: ${({ theme }) => theme['font-family-secondary']};
  color: ${({ theme }) => theme['content-color-secondary']};
`;