import React from "react";
import { Instagram, GitHub, Linkedin, Twitter } from "react-feather";
import Avatar from "../assets/myAvatar.png";
import Link from "../components/Link";
import "../styles/pages/HomePage.css";

const HomePage = props => {
  return (
    <div className="homepage-container">
      <div className="homepage-intro">
        <h1 className="homepage-intro--heading">
          Hey, I am Devansh!
          <span role="img" aria-label="waving-hand">
            👋
          </span>
        </h1>
        <p className="homepage-intro--text">
          {`I am a design-minded Frontend Developer from India `}
          <span role="img" aria-label="india">
            🇮🇳
          </span>
          {`. I love JavaScript and React. If not stumbling upon Twitter, I also spend some
          time designing minimal arts and in quizzing!`}
        </p>
      </div>
      <div className="social-icons">
        <div className="icon-container github">
          <Link to="https://github.com/devanSAGA">
            <GitHub className="github-icon" size={50} />
          </Link>
        </div>
        <div className="icon-container instagram">
          <Link to="https://www.instagram.com/_devansaga_/">
            <Instagram className="instagram-icon" size={50} />
          </Link>
        </div>
        <div className="icon-container twitter">
          <Link to="https://twitter.com/devanshdoesdab">
            <Twitter className="twitter-icon" size={50} />
          </Link>
        </div>
        <div className="icon-container linkedin">
          <Link to="https://www.linkedin.com/in/devansh-purohit-3541b7140/">
            <Linkedin className="linkedin-icon" size={50} />
          </Link>
        </div>
      </div>
      <div className="avatar">
        <img src={Avatar} title="avatar" alt="avatar" />
      </div>
    </div>
  );
};

export default HomePage;
