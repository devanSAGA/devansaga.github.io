import React from 'react';
import styled from 'styled-components';

function getSwitchBackgroundColor(isChecked, isDisabled) {
  if (isChecked) {
    return isDisabled
      ? '#ADCDFB'
      : '#0265D2';
  }
  return isDisabled
    ? '#E6E6E6'
    : '#A6A6A6';
}

const StyledSwitchContainer = styled.div`
  display: inline-block;
  position: relative;
  height: 16px;
  width: 28px;
`;

const StyledInputSwitch = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  position: absolute;
  top: 0;
  left: 0;
  height: 0.1px;
  opacity: 0;
  width: 0.1px;

  &:focus + .toggle-switch-focus {
    box-shadow: 0 0 0 1px #FFFFFF, 0 0 0 3px #ADCDFB;
  }
`;

const StyledSwitchLabel = styled.label.attrs(() => ({
  className: 'toggle-switch-focus'
}))`
  border-radius: 9999px;
  position: absolute;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    getSwitchBackgroundColor(props.isChecked, props.isDisabled)};
  &:before {
    border-radius: 9999px;
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: #FFFFFF;
    transition: 0.2s;
    transform: ${(props) => (props.isChecked ? 'translateX(12px)' : '')};
  }
`;

function ToggleSwitch(props) {
  const {
    isChecked,
    isDisabled,
    onChange
  } = props;

  const handleChange = (e) => {
    if (!isDisabled) {
      onChange(!isChecked, e);
    }
  };

  return (
    <StyledSwitchContainer
      onClick={handleChange}
      checked={isChecked}
    >
      <StyledInputSwitch
        isDisabled={isDisabled}
      />
      <StyledSwitchLabel
        isChecked={isChecked}
        isDisabled={isDisabled}
      />
    </StyledSwitchContainer>
  );
};

export default ToggleSwitch;

ToggleSwitch.defaultProps = {
  isDisabled: false
};
