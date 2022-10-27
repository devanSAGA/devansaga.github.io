import React from 'react';
import styled, { keyframes } from 'styled-components';

const bubbleAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const StyledStatusBadge = styled.div`
  position: relative;
`;

const BadgeText = styled.span`
  display: inline-block;
  margin-right: 8px;
  font-size: ${(props) => props.theme['font-size-l']};
  font-weight: ${(props) => props.theme['font-weight-strong']};
  line-height: 24px;
  color: ${(props) => props.isOnline ? props.theme['content-color-primary'] : props.theme['content-color-secondary']};
`;

const OnlineStatusBadge = styled.span`
  position: absolute;
  vertical-align: middle;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6ED2B7;

  &::before,
  &::after {
    top: 50%;
    margin-left: -1px;
    margin-top: -6px;
    position: absolute;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  &::before {
    content: "";
    background-color: #6ED2B7;
    animation: ${bubbleAnimation} 1.5s infinite;
  }

  &::after {
    content: "";
    background-color: #6ED2B7;
    animation: ${bubbleAnimation} 1.5s -0.4s infinite;
  }
`;

function StatusBadge(props) {
  const { isOnline, isLoading } = props;

  return !isLoading ? (
    <StyledStatusBadge>
      <BadgeText isOnline={isOnline}>{isOnline ? 'Online' : 'Offline'}</BadgeText>
      {isOnline && <OnlineStatusBadge />}
    </StyledStatusBadge>
  ) : null;
}

export default StatusBadge;
