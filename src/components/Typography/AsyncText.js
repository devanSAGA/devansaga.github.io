import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonLoadingAnimation = keyframes`
  0% {
    opacity: 0.25;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.25;
  }
`;

const SkeletonText = styled.span`
  display: block;
  width: 240px;
  height: 8px;
  animation: ${skeletonLoadingAnimation} 1s ease-in-out infinite; 
  background-color: ${(props) => props.theme['content-color-secondary']};
  border-radius: 4px;
  margin-top: 8px;
`;

const StyledText = styled.span`
  display: flex;
  align-items: flex-end;
  max-width: 100%;
  margin-left: 0;
`;

function AsyncText(props) {
  const { isLoading, children } = props;
  return (
    isLoading ? (
      <SkeletonText />
    ) : (
      <StyledText>
        {children}
      </StyledText>
    )
  );
}

export default AsyncText;
