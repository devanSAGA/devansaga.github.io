import React from 'react';
import styled from 'styled-components';

const RadioGroupContainer = styled.div`
	display: inline-flex;
	position: relative;
  border: 1px solid rgb(86 77 168);
	padding: 8px;
	border-radius: 24px;
  * {
		z-index: 2;
	}

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked {
    & + label {
      color: #F7F2FF;
    }
  }

  input[id="radio-0"]:checked ~ .glider{
    transform: translateX(0);
  }

  input[id="radio-1"]:checked ~ .glider {
    transform: translateX(100%);
  }

  .glider {
    position: absolute;
    display: flex;
    height: 32px;
    width: 164px;
    background-color: #623497;
    z-index: 1;
    border-radius: 16px;
    transition: 0.3s ease-out;
  }
`;

const StyledInput = styled.input.attrs(props => ({
  type: 'radio'
}))``;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 32px;
	width: 164px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	transition: color 0.15s ease-in;
  color: #C0A8E1;
`;

export default function RadioGroup(props) {
  const { options, value, onChange } = props;

  return (
    <RadioGroupContainer>
      {options.map((option, index) => {
        const isChecked = value === option.value;
        return (
          <>
            <StyledInput id={`radio-${index}`} name="radio-group" checked={isChecked} />
            <StyledLabel onClick={() => onChange(option.value)} for={`radio-${index}`}>{option.label}</StyledLabel>
          </>
        );
      })}
      <span className="glider"></span>
    </RadioGroupContainer>
  );
}