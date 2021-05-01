import React from "react";
import styled from 'styled-components';
import { Instagram, GitHub, Linkedin, Twitter } from "react-feather";

import Avatar from "../components/Avatar/Avatar";
import { AvatarSection } from './HomePage';
import Emoji from "../components/Emoji/Emoji";
import Link from "../components/Link/Link";

// Links I have used in my About Me section. 
const INSTAGRAM_LINK = "https://www.instagram.com/_devansaga_/";
const POSTMAN_LINK = "https://postman.com";
const COMPETITIVE_PROGRAMMING_WIKI_LINK = "https://en.wikipedia.org/wiki/Competitive_programming#:~:text=Competitive%20programming%20is%20a%20mind,program%20according%20to%20provided%20specifications";
const REACT_DOCS_LINK = "https://reactjs.org/";
const TWITTER_LINK = "https://twitter.com/devanshp_";
const THE_LOCAL_TRAIN_SPOTIFY_LINK = "https://open.spotify.com/artist/7b6Ui7JVaBDEfZB9k6nHL0";
const MONTHERS_DAY_POST_LINK = "https://www.instagram.com/p/CAAC1VyjY9b/";

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 128px;

  h1, p {
    width: 100%;
    text-align: left;
    color: #212121;
  }

  h1 {  
    font-size: 3.2rem;
    font-weight: bold;
    margin-top: 64px;
    margin-bottom: 32px; 
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  & a {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    height: 24px;
    padding: 4px 2px;
    color: #0265D2;

    &:hover {
      background-color: #E7F0FF;
      padding: 4px 2px;
      border-radius: 3px;
    }    
  }
`;

function AboutMe() {
  return (
    <>
      <AboutSection>
        <h1>About Me</h1>
        <p>Oh you clicked! Awesome.</p>
        <p>
          My name is Devansh. I am from India <Emoji ariaLabel='india-flag' emoji="🇮🇳" />,
          and I'm working with the Design System team at <Link to={POSTMAN_LINK}>Postman</Link>.
        </p>
        <p>
          I have been fond of drawing since childhood and in college, I got introduced to Digital Designing.
          I got intrigued quickly by Designing as it allowed me to convey my ideas through Designs and Illustrations.
          You can check my designs on <Link to={INSTAGRAM_LINK}>Instagram</Link>!
        </p>

        <p>
          During college, I also got introduced to programming as one of the subjects!
          I liked programming as but the common trend in the college was
          towards <Link to={COMPETITIVE_PROGRAMMING_WIKI_LINK}>Competitive Programming</Link> but
          the Data Structures and Algorithms didn't interest me much. I wanted to use programming concepts to build something
          that I can use in daily life. That's when I got to know about Frontend Development.
        </p>

        <p>
          I started learning HTML,CSS and JavaScript.
          As I continued learning I came across <Link to={REACT_DOCS_LINK}>React</Link>,
          and this was the first <i>Aha</i> moment for me (I love React <Emoji ariaLabel="heart-eyes-emoji" emoji="😍" />).
          React enabled me to connect 
          two concepts in my mind (Design and Programming) using which I can Build Things.
        </p>

        <p>
          Few years fast forwards, I joined Postman (and currently working) in the Design System team.
          This I believe is, one of the best things happened in my life!
          Here, I found the second <i>Aha</i> moment for me - Design Systems, which falls right as an intersection of
          my two key interests: Designing and Building UI.
        </p>

        <p>
          Here, I also found the area which I want to explore that
          is - How to build quality software, especially the UI and UX aspects of it. So currently, I am learning and exploring that!
        </p>

        <p>
          Apart from that, I am a huge fan of Cartoons (the 90s), Anime, Superheroes, and collecting Nerdy Tshirts.
          In my free time, I go cycling, scroll through <Link to={TWITTER_LINK}>Twitter</Link> or
          listen to <Link to={THE_LOCAL_TRAIN_SPOTIFY_LINK}>The Local Train</Link>.
        </p>

        <p>
          One more thing I enjoy a lot is making puns, Wordplay is my <i>weapun</i>.
          You can see, that is reflected in some of my <Link to={MONTHERS_DAY_POST_LINK}>designs</Link> as well.
        </p>

        <p>
          If you would like to say hello, feel free to message me on Twitter or at dnpurohit96[at]gmail.com.
        </p>
      </AboutSection>
      <AboutMeIllustration />
    </>
  );
};


const SocialMediaIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  height: 156px;

  & .icon-container {
    margin: 20px 20px 0 20px;
    transition: all 0.3s ease-in-out;
  }

  & .icon-container:hover {
    transform: scale(1.1);

    & > a {
      background-color: transparent;
    }
  }

  & .gh,
  & .li {
    align-self: flex-end;
  }

  & .in,
  & .tw {
    align-self: flex-start;
  }

  & .gh-icon,
  & .tw-icon,
  & .ig-icon,
  & .li-icon {
    color: #2978b5;
    opacity: 1;
    stroke-width: 2px;
  }

  & .gh-icon:hover,
  & .tw-icon:hover,
  & .ig-icon:hover,
  & .li-icon:hover {
    color: #0f0a3c;
  }

  & .gh-icon:hover {
    fill: #34699a;
  }

  & .tw-icon:hover {
    fill: #8ed6ff;
  }

  & .ig-icon:hover {
    fill: #e36bae;
  }
  & .li-icon:hover {
    fill: #408ab4;
  }
`;


function AboutMeIllustration() {
  return (
    <>
      <SocialMediaIconsContainer>
      <div className="icon-container gh">
        <Link to="https://github.com/devanSAGA">
          <GitHub className="gh-icon" size={48} />
        </Link>
      </div>
      <div className="icon-container ig">
        <Link to="https://www.instagram.com/_devansaga_/">
          <Instagram className="ig-icon" size={48} />
        </Link>
      </div>
      <div className="icon-container tw">
        <Link to="https://twitter.com/devanshp_">
          <Twitter className="tw-icon" size={48} />
        </Link>
      </div>
      <div className="icon-container li">
        <Link to="https://www.linkedin.com/in/devansh-purohit-3541b7140/">
          <Linkedin className="li-icon" size={48} />
        </Link>
      </div>
      </SocialMediaIconsContainer>
      <AvatarSection>
        <Avatar />
      </AvatarSection>
    </>
  );
}

export default AboutMe;
