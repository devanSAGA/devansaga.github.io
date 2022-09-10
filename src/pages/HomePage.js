import React from "react";
import styled from 'styled-components';
import Typical from 'react-typical'

import WavingHandEmoji from "../components/Emoji/WavingHand";

const INTERESTS = [
  'Pokémon 👾', 2000,
  'Running 🏃', 2000,
  'Hiking 🏔', 2000,
  'Badminton 🏸', 2000,
  'Minimal Design 🎨', 2000,
  'Puns 😆', 2000,
  'Ted Lasso 👨🏻', 2000,
  'Anime 📺', 2000,
  'Card Magic 🃏', 2000
];

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  margin-bottom: 72px;
`;

const IntroSection = styled.section`
  margin-top: 128px;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;

  @media (max-width: 468px) {
    margin-top: 64px;
  }

  h1 {
    font-family: ${(props) => props.theme['font-family-secondary']};
    font-size: ${(props) => props.theme['font-size-xxl']};
    font-weight: ${(props) => props.theme['font-weight-regular']};
    color: ${(props) => props.theme['content-color-primary']};
    margin-bottom: 16px;

    & .no-wrap {
      white-space: nowrap;
    }
    
    @media (max-width: 768px) {
      font-size: ${(props) => props.theme['font-size-xl']};
    }
  }

  p {
    font-size: ${(props) => props.theme['font-size-l']};
    color: ${(props) => props.theme['content-color-primary']};
    line-height: 36px;

    b {
      font-family: ${(props) => props.theme['font-family-secondary']};
    }

    @media (max-width: 512px) {
      line-height: 32px;
      display: inline;
    }
  }

  p:last-child:before {
    @media (max-width: 512px) {
      content: ' '
    }
  }
`;

const InterestsText = styled.p`
  font-size: ${(props) => props.theme['font-size-l']};
  color: ${(props) => props.theme['content-color-secondary']};
  align-self: flex-start;

  span {
    color: ${(props) => props.theme['content-color-primary']};
    font-family: ${(props) => props.theme['font-family-secondary']};
  }
`;

const AnimatedText = styled(Typical)`
  @media (max-width: 512px) {
    display: block;
  }
`;

function HomePage() {
  return (
    <HomePageContainer>
      <IntroSection>
        <h1>Hey, I am <span className="no-wrap">Devansh!<WavingHandEmoji /></span></h1>
        <p>I am a design-minded frontend developer.</p>  
        <p>I am curious and passionate towards <b>Design Systems</b> and <b>UX Engineering</b>.</p>  
      </IntroSection>
      <InterestsText>
        I love to discuss about&nbsp;
        <AnimatedText
          steps={INTERESTS}
          loop={Infinity}
          wrapper="span"
        />
      </InterestsText>
    </HomePageContainer>
  );
};

export default HomePage;
