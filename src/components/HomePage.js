import React from "react";
import "../styles/HomePage.css";
import Avatar from "../assets/myAvatar.png";
import { Instagram, GitHub, Linkedin, Twitter } from "react-feather";

const HomePage = props => {
  return (
    <div className="homepage-container">
      <div className="personal-info">Hey I am Devansh</div>
      <div className="social-icons">
        <div className="icon-container below">
          <a
            href="https://github.com/devanSAGA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="github-icon" size={50} />
          </a>
        </div>
        <div className="icon-container above">
          <a
            href="https://www.instagram.com/_devansaga_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="instagram-icon" size={50} />
          </a>
        </div>
        <div className="icon-container above">
          <a
            href="https://twitter.com/devanshdoesdab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="twitter-icon" size={50} />
          </a>
        </div>
        <div className="icon-container below">
          <a
            href="https://www.linkedin.com/in/devansh-purohit-3541b7140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="linkedin-icon" size={50} />
          </a>
        </div>
      </div>
      <div className="avatar">
        <img src={Avatar} title="avatar" alt="avatar" />
      </div>
    </div>
  );
};

export default HomePage;
