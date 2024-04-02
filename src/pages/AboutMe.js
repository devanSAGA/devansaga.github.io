import React from "react";
import styled from 'styled-components';
import { Twitter, GitHub, Instagram } from "react-feather";

import Emoji from "../components/Emoji/Emoji";
import Link from "../components/Link/Link";
import PageContainer from "../components/PageContainer/PageContainer";
import AboutMePhoto from '../assets/MyImage.jpg';

// Links I have used in my About Me section. 
export const INSTAGRAM_LINK = "https://www.instagram.com/_devansaga_/";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/devansh-purohit-3541b7140/";
export const GITHUB_LINK = "https://github.com/devanSAGA";
export const TWITTER_LINK = "https://twitter.com/devanshp_";
export const THE_LOCAL_TRAIN_SPOTIFY_LINK = "https://open.spotify.com/artist/7b6Ui7JVaBDEfZB9k6nHL0";

const Container = styled.div`
  display: flex;

  img {
    width: 420px;
    height: 560px;
    border-radius: 16px;
    margin-right: 16px;
  }

  @media (max-width: 768px) {
   flex-direction : column;

   img {
    width: 100%;
    margin-bottom: 16px;
   }
  }

  @media (max-width: 468px) {
   flex-direction : column;

   img {
    height: 440px;
   }
  }
`;

const PrimaryText = styled.span`
  color: ${(props) => props.color ? props.color : props.theme['content-color-primary']};
`;

const IntroText = styled.section`
  max-width: 420px;
  p {
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-m']};
    font-family: ${(props) => props.theme['font-family-secondary']};
    line-height: 1.44;
    margin-bottom: 12px;
  }

  a {
    color: ${(props) => props.color ? props.color : props.theme['content-color-link']};

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }

  ul {
    line-height: 1;

    li {
      list-style-type: none;
      display: inline-block;

      a {
        display: inline-flex;
        align-items: center;
      }
    }
  }

  svg {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
`;

function AboutMe() {
  return (
    <PageContainer title="About me">
      <Container>
        <img
          src={AboutMePhoto}
          alt="A photo of myself (Devansh)"
          loading="lazy"
        />
        <IntroText>
          <p>Oh you clicked! Awesome.</p>
          <p>
            My name is Devansh. I am from <PrimaryText>Bangalore, India <Emoji ariaLabel='india-flag' emoji="🇮🇳" /> </PrimaryText>.
            I work with the UX-Foundation team at <PrimaryText color='#FF6C37'>Postman</PrimaryText>.
          </p>
          <p>
            In college, while studying programming, I discovered digital design.
            My creative urge to 'build' something, combined with my love for colors, naturally guided me towards <PrimaryText>Design System</PrimaryText> and Frontend Development in general.
          </p>
          <p>
            When not fine-tuning pixels, I enjoy listening <Link to={THE_LOCAL_TRAIN_SPOTIFY_LINK}>The Local Train</Link> and exploring the streets and local eateries of the city.
          </p>
          <p>
            To burn those calories, I love <PrimaryText>hiking</PrimaryText> mountains, <PrimaryText>running, cycling</PrimaryText> and playing <PrimaryText>badminton</PrimaryText>.
          </p>
          <p>
            You can find me on:
            <br />
            <ul>
              <li><Link to={TWITTER_LINK}><Twitter />Twitter</Link></li>&nbsp;&#183;&nbsp;
              <li><Link to={INSTAGRAM_LINK}><Instagram />Instagram</Link></li>&nbsp;&#183;&nbsp;
              <li><Link to={GITHUB_LINK}><GitHub />GitHub</Link></li>
            </ul>
          </p>
        </IntroText>
      </Container>
    </PageContainer>
  );
};

export default AboutMe;
