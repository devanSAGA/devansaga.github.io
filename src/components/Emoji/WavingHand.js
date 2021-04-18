import React from 'react';
import styled, { keyframes } from 'styled-components';
import Emoji from './Emoji';

const waving_hand_animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(20deg);
  }
  20% {
    transform: rotate(0deg);
    color: transparent;
    text-shadow: 0 0 #f1c27d;
  }
  30% {
    transform: rotate(20deg);
  }
  40% {
    transform: rotate(0deg);
    color: transparent;
    text-shadow: 0 0 #e0ac69;
  }
  50% {
    transform: rotate(20deg);
  }
  60% {
    transform: rotate(0deg);
    color: transparent;
    text-shadow: 0 0 #c68642;
  }
  70% {
    transform: rotate(20deg);
  }
  80% {
    transform: rotate(0deg);
    color: transparent;
    text-shadow: 0 0 #8d5524;
  }
  90% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const WavingHand = styled(Emoji)`
  display: inline-block;
  animation: ${waving_hand_animation} 5s;
  transform: rotate(0deg);
  animation-iteration-count: infinite;
  transform-origin: 75% 75%;
`;

function WavingHandEmoji() {
  return (
    <WavingHand emoji="👋" ariaLabel="waving-hand-emoji" />
  );
}

export default WavingHandEmoji;
