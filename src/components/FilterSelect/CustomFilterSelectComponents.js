import React from 'react';
import styled from 'styled-components';
import { components } from 'react-select';

const StyledDropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;


// Component to define the down-arrow icon inside react-select's trigger
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

const StyledCustomValueContainer = styled(components.ValueContainer)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const SelectedOptionsLabel = styled.span`
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['font-size-xs']};
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

const ValueContainerText = styled.span`
  height: 100%;
`;

function CustomValueContainer(props) {
  const { selectProps, hasValue } =  props;
  const { inlineLabel, label } =  selectProps;

  return (
    <StyledCustomValueContainer {...props}>
      {label && <Prefix>{label}</Prefix>}
      <ValueContainerText>
        {
          !hasValue ? props.children : (
            <SelectedOptionsLabel>{inlineLabel}</SelectedOptionsLabel>
          )
        }
      </ValueContainerText>
    </StyledCustomValueContainer>
  );
}

function Null() {
  return null;
}

export {
  Null,
  CustomValueContainer,
  DropdownIndicatorIcon
};