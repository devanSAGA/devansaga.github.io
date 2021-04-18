import React from "react";
import styled from 'styled-components';
import Avatar from '../components/Avatar/Avatar';
import WavingHandEmoji from "../components/Emoji/WavingHand";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const IntroSection = styled.section`
  margin-top: 128px;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;

  @media (max-width: 468px) {
    margin-top: 64px;
  }
`;

const IntroHeading = styled.h1`
  font-size: 4.8rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #212121;

  @media (max-width: 468px) {
    font-size: 3.2rem;
  }
`;

const IntroSubheading = styled.p`
  font-size: 2.4rem;
  color: #212121;
  line-height: 1.5;

  @media (max-width: 468px) {
    font-size: 2rem;
  }
`;

export const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  min-height: 250px;

  & img {
    align-self: flex-end;
  }
`;

function HomePage() {
  return (
    <HomePageContainer>
      <IntroSection>
        <IntroHeading>Hey, I am Devansh!<WavingHandEmoji /></IntroHeading>
        <IntroSubheading>I am a design-minded frontend developer.</IntroSubheading>  
        <IntroSubheading>I am curious and passionate towards <b>Design Systems</b> and <b>UX engineering</b>.</IntroSubheading>  
      </IntroSection>
      <AvatarSection>
        <Avatar />
      </AvatarSection>
    </HomePageContainer>
  );
};

export default HomePage;
