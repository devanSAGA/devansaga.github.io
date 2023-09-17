import React from 'react';
import styled from 'styled-components';
import { components } from 'react-select';

// Custom down chevron icon inside trigger
const StyledDropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

function DropdownIndicatorIcon(props) {
  return (
    <StyledDropdownIndicator>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z'
          fill='#6B6B6B'
        />
      </svg>
    </StyledDropdownIndicator>
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
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
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

// Custom menu popover - which includes "Clear" button in the bottom
const StyledClearButtonContainer = styled.div`
  background-color: ${(props) => props.theme['background-color-primary']};
  padding-bottom: 4px;
`;

const ClearSelectionButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border: 1px solid ${(props) => props.theme['imdp-primary-color']};
  border-radius: ${(props) => props.theme['border-radius-default']};
  height: 32px;
  padding: 0px 8px;
  margin-top: 4px;
  color: ${(props) => props.theme['content-color-primary']};
  background-color: transparent;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${(props) => props.theme['border-color-light']};
    color: ${(props) => props.theme['content-color-secondary']};
  }
`;

const StyledMenuList = styled(components.MenuList)`
  padding: 8px;
`;

function MenuList(props) {
  const { children = [], selectProps } = props;
  const {
    onClearSelectedOptions,
    value,
  } = selectProps;

  const isClearButtonDisabled = !(value && value.length);
  return (
    <>
      <StyledMenuList {...props}>{children}</StyledMenuList>
      <StyledClearButtonContainer>
        <ClearSelectionButton
          onClick={onClearSelectedOptions}
          disabled={isClearButtonDisabled}
        >
          Cleat selected
        </ClearSelectionButton>
      </StyledClearButtonContainer>
    </>
  );
}


export {
  CustomValueContainer,
  CustomMultiValueContainer,
  DropdownIndicatorIcon,
  CustomOption,
  MenuList
};
