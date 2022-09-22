import React from 'react';
import styled, { keyframes } from 'styled-components';

const STRAVA_WEBSITE_URL='https://www.strava.com';

const skeletonLoading = keyframes`
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
  animation: ${skeletonLoading} 1s ease-in-out infinite; 
  background-color: ${(props) => props.theme['content-color-secondary']};
  border-radius: 4px;
  margin-top: 8px;
`;

const StyledLastActivityLabel = styled.span`
  display: flex;
  align-items: flex-end;
  max-width: 100%;
  margin-left: 0;
  margin-top: 2px;

  a {
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-s']};
    line-height: 20px;
    margin-right: 4px;
  }
`;


function LastActivityLabel(props) {
  const { isLoading, lastActivity } = props;
  return (
    isLoading ? (
      <SkeletonText className='loading-text' />
    ) : (
      <StyledLastActivityLabel>
        <a
          href={`${STRAVA_WEBSITE_URL}/activities/${lastActivity.id}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {lastActivity.name} on {lastActivity.date}
        </a>
      </StyledLastActivityLabel>
    )
  );
}

export default LastActivityLabel;