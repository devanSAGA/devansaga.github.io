import React from 'react';
import styled from 'styled-components';

function SpinnerSVG() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      x='0'
      y='0'
      enableBackground='new 0 0 50 50'
      version='1.1'
      viewBox='0 0 16 16'
      xmlSpace='preserve'
    >
      <rect
        width='4'
        height='10'
        fill='#333'
        opacity='0.2'
        rx='2'
        ry='2'
      >
        <animate
          attributeName='opacity'
          attributeType='XML'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
          values='0.2; 1; 0.2'
        />
        <animate
          attributeName='height'
          attributeType='XML'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
          values='8; 16; 8'
        />
        <animate
          attributeName='y'
          attributeType='XML'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
          values='5; 0; 5'
        />
      </rect>
      <rect
        width='4'
        height='10'
        x='6'
        y='10'
        fill='#333'
        opacity='0.2'
        rx='2'
        ry='2'
      >
        <animate
          attributeName='opacity'
          attributeType='XML'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
          values='0.2; 1; 0.2'
        />
        <animate
          attributeName='height'
          attributeType='XML'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
          values='8; 16; 8'
        />
        <animate
          attributeName='y'
          attributeType='XML'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
          values='5; 0; 5'
        />
      </rect>
      <rect
        width='4'
        height='10'
        x='12'
        y='10'
        fill='#333'
        opacity='0.2'
        rx='2'
        ry='2'
      >
        <animate
          attributeName='opacity'
          attributeType='XML'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
          values='0.2; 1; 0.2'
        />
        <animate
          attributeName='height'
          attributeType='XML'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
          values='8; 16; 8'
        />
        <animate
          attributeName='y'
          attributeType='XML'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
          values='5; 0; 5'
        />
      </rect>
    </svg>
  );
}

const StyledSpinner = styled.div`
  display: flex;
  justify-content: flex-start;

  svg path,
  svg rect {
    fill: ${(props) => props.theme['content-color-secondary']};
  }
`;

export default function Spinner({ className }) {
  return (
    <StyledSpinner
      className={className}
    >
      <SpinnerSVG />
    </StyledSpinner>
  );
}
