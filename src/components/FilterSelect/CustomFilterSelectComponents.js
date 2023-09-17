import React from 'react';
import styled from 'styled-components';
import { components } from 'react-select';
import Tooltip from '../../components/Tooltip/Tooltip';

// Custom down chevron icon inside trigger
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

function DropdownIndicatorIcon(props) {
  return (
    <IconContainer>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z'
          fill='#6B6B6B'
        />
      </svg>
    </IconContainer>
  );
}

function ClearIndicatorIcon(props) {
  const { innerProps: { ref, ...restInnerProps } } = props;
  return (
    <IconContainer ref={ref} {...restInnerProps}>
      <Tooltip content="Clear selections">
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.00001 8.70711L5.35356 11.3536L4.64645 10.6465L7.2929 8.00001L4.64645 5.35356L5.35356 4.64645L8.00001 7.2929L10.6465 4.64645L11.3536 5.35356L8.70711 8.00001L11.3536 10.6465L10.6465 11.3536L8.00001 8.70711Z'
            fill='#6B6B6B'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'
            fill='#6B6B6B'
          />
        </svg>
      </Tooltip>
    </IconContainer>
  );
}

// Custom trigger component
const StyledCustomValueContainer = styled(components.ValueContainer)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Prefix = styled.span`
  height: 30px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['content-color-primary']};
  font-family: ${(props) => props.theme['font-family-secondary']};
  font-size: 14px;
	font-weight: 400;
  padding: 0px 8px;
  margin-right: 8px;
  background-color: ${(props) => props.theme['imdp-primary-color']};
  color: ${(props) => props.theme['content-color-primary']};
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

function CustomValueContainer(props) {
  const { selectProps: { label }, children } =  props;
  return (
    <StyledCustomValueContainer {...props}>
      {label && <Prefix>{label}</Prefix>}
      {children}
    </StyledCustomValueContainer>
  );
}

const SelectedOptionsLabel = styled.span`
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['font-size-xs']};
`;

function CustomMultiValueContainer(props) {
  if (props.index > 0) return null;

  const { selectProps: { inlineLabel } } =  props;
  
  return <SelectedOptionsLabel>{inlineLabel}</SelectedOptionsLabel>;
}

// Custom option componenf - which includes checkbox
const StyledMultiSelectOption = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;

  & .filter-select-dropdown__option--checkbox {
    margin-right: 8px;
  }
`;

function CheckBox(props) {
  const { isChecked, className } = props;
  return <input type='checkbox' checked={isChecked} className={className} />
}

function CustomOption(props) {
  const {
    isSelected,
    isFocused,
    children,
    ...restOfProps
  } = props;

  return (
    <components.Option {...restOfProps}>
      <StyledMultiSelectOption isFocused={isFocused}>
        <CheckBox
          isChecked={isSelected}
          className='filter-select-dropdown__option--checkbox'
        />
        <span>{children}</span>
      </StyledMultiSelectOption>
    </components.Option>
  );
}

export {
  CustomValueContainer,
  CustomMultiValueContainer,
  ClearIndicatorIcon,
  DropdownIndicatorIcon,
  CustomOption
};
