import React from "react";
import Emoji from "../components/Emoji/Emoji";
import Link from "../components/Link/Link";
import PageContainer from "../components/PageContainer/PageContainer";

// Links I have used in my About Me section. 
const INSTAGRAM_LINK = "https://www.instagram.com/_devansaga_/";
const POSTMAN_LINK = "https://postman.com";
const COMPETITIVE_PROGRAMMING_WIKI_LINK = "https://en.wikipedia.org/wiki/Competitive_programming#:~:text=Competitive%20programming%20is%20a%20mind,program%20according%20to%20provided%20specifications";
const REACT_DOCS_LINK = "https://reactjs.org/";
const TWITTER_LINK = "https://twitter.com/devanshp_";
const THE_LOCAL_TRAIN_SPOTIFY_LINK = "https://open.spotify.com/artist/7b6Ui7JVaBDEfZB9k6nHL0";

function AboutMe() {
  return (
    <PageContainer title="About me">
      <p>Oh you clicked! Awesome.</p>
      <p>
        My name is Devansh. I am from India <Emoji ariaLabel='india-flag' emoji="🇮🇳" />,
        and I'm work in Design System team at <Link to={POSTMAN_LINK}>Postman</Link>.
      </p>
      <p>
        I have been fond of drawing since childhood and in college, I got introduced to digital designing.
        I got intrigued quickly by designing as it allowed me to convey my ideas through <Link to={INSTAGRAM_LINK}>designs and illustrations</Link>.
      </p>

      <p>
        During college, I also got introduced to programming as one of the subjects!
        I was getting interested in programming as I was learning it but unlike the common college trend, <Link to={COMPETITIVE_PROGRAMMING_WIKI_LINK}>competitive programming</Link> didn't
        interest me much. I wanted to use programming concepts to build something that I can use in daily life.
        Soon, I got to know about Frontend Development.
      </p>

      <p>
        I started learning HTML, CSS and JavaScript.
        As I continued learning I came across <Link to={REACT_DOCS_LINK}>React</Link>,
        and this was the first <i>aha</i> moment for me.
        React enabled me to connect 
        two concepts in my mind (Design and Programming) using which I can "Build Things".
      </p>

      <p>
        Few years down the line, I joined Postman (and currently working).
        This I believe is, one of the best things happened in my life!
        Here, I found the second <i>aha</i> moment for me - Design Systems, which falls right as an intersection of
        my two key interests: Designing and Building UI.
      </p>

      <p>
        In my free time, I mostly go cycling, scroll through <Link to={TWITTER_LINK}>Twitter</Link> or listen to
        <Link to={THE_LOCAL_TRAIN_SPOTIFY_LINK}>The Local Train</Link>. I also enjoy making puns a lot, I think wordplay is my <i>weapun</i>!
      </p>
    </PageContainer>
  );
};

export default AboutMe;
