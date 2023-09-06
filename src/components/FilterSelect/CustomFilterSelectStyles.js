/* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix, no-descending-specificity */
import { css } from 'styled-components';

const postmanSpecificStyles = css`
  & .filter-select-dropdown__control {
    cursor: pointer;
    height: 32px;
    min-height: 32px;
  }

  & .filter-select-dropdown__placeholder {
    display: inline-block;
    user-select: none;
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-xs']};
  }

  & .filter-select-dropdown__value-container {
    user-select: none;
    display: flex;
    padding: 0px;
  }

  & .filter-select-dropdown__menu,
  & .filter-select-dropdown__control {
    background-color: #161616;
    border: 1px solid ${(props) => props.theme['imdp-primary-color']};

    &:hover {
      border: 1px solid ${(props) => props.theme['imdp-primary-color']};
    }
  }

  & .filter-select-dropdown__control--is-focused {
    box-shadow: none;
  }

  & .filter-select-dropdown__menu {
    padding: 8px 8px 4px 8px;
    /* box-shadow: 0 0 1px rgba(255, 255, 255, 0.72), 0 16px 24px -8px rgba(0, 0, 0, 0.32); */
    box-shadow: ${(props) => props.theme['popover-shadow']};
  }

  & .filter-select-dropdown__menu-list { 
    padding: 0;
  }

  & .filter-select-dropdown__option {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    height: 24px;
    color: ${(props) => props.theme['content-color-primary']};
    border-radius: ${(props) => props.theme['border-radius-default']};
    font-size: ${(props) => props.theme['font-size-xs']};
    padding: 0px 8px;
    margin-bottom: 4px;
    &:active,
    &:hover {
      background-color: #8f83f6;
    }
  }

  & .filter-select-dropdown__option--is-focused {
    background-color: transparent;
  }

  & .filter-select-dropdown__option--is-selected {
    background-color: #aca4f7;
    color: #32247b;
  }
`;

export { postmanSpecificStyles };

