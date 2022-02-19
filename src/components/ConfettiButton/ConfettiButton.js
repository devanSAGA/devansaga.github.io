import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Reward from "rewards-lite";

const gradientAnimation = (percentage) => keyframes`
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
`;

const StyledConfettiButton = styled.button`
  user-select: none;
  position: relative;
  outline: none;
  border: 2px solid #E6E6E6;
  background-color: #F9F9F9;
  color: #212121;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    background: linear-gradient(
      124deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3
    );
    background-size: 400%;
    z-index: -1;
    filter: blur(4px);
    animation: ${gradientAnimation} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 8px;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 2px solid #E6E6E6;
    background-color: #F9F9F9;
    border-radius: 8px;
  }
`;

function ConfettiButton(props) {
  const rewardRef = useRef();
  const { text } = props;

  const handleOnClick = () => {
    rewardRef.current.rewardMe();
  };

  return (
    <Reward
      ref={rewardRef}
      type="emoji"
      config={{
        springAnimation: false,
        emoji: ["🏆", "🎉", "👏", "🎊"],
        spread: 100,
        elementCount: 30,
        elementSize: 32,
        zIndex: 10,
        lifetime: 200,
        startVelocity: 40,
      }}
    >
      <StyledConfettiButton onClick={handleOnClick}>
        {text}
      </StyledConfettiButton>
    </Reward>
  );
}

export default ConfettiButton;
