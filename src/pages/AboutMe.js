import React from "react";
import Link from "../components/Link";
import "../styles/pages/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-page-container">
      <div className="page-heading-container">
        <h1 className="page-heading" id="projects">
          <span className="hash-symbol">#</span>About me
        </h1>
      </div>
      <section className="aboutme ">Oh you clicked! Awesome.</section>
      <section className="aboutme">
        My name is Devansh, I am a Junior Frontend Developer from India. I have
        completed my bachelor of technology in the field of Information and
        Communication Technology(4th year) at Dhirubhai Ambani Institute of
        Information and Communication Technology , Gandhinagar.
      </section>
      <section className="aboutme">
        Along with JavaScript I love Cartoons(90's), Superheroes and collecting
        Nerdy T-Shirts. I am currently exploring React and implementing some of
        my ideas. The other side of me is an Artist. I have been fond of drawing
        since my childhood and after getting introduced to Adobe Illustrator I
        try to convey my Ideas through Illustrations. I am good at making puns
        and that is reflected in my Designs too. You can check my{" "}
        <Link to="https://www.instagram.com/_devansaga_/" textColor="#e14594">
          Instagram
        </Link>{" "}
        to have a look at my designs and know more.
      </section>
      <section className="aboutme">
        In my spare time, I watch Football or participate in a Quiz or scroll
        through{" "}
        <Link to="https://twitter.com/devanshdoesdab" textColor="#5893d4">
          Twitter
        </Link>{" "}
        or listen to{" "}
        <Link to="http://www.thelocaltrain.com/" textColor="#113f67">
          The Local Train.
        </Link>
      </section>
      <section className="aboutme">
        If you would like to say hello,
        <br />
        Feel free to Contact me @{" "}
        <span className="bold">dnpurohit96[at]gmail.com</span>
      </section>
      <section className="aboutme">
        <span className="bold">PS:</span> I am currently looking for a{" "}
        <span className="bold">Frontend Developer</span> job, I am passionate
        about learning new things related to web and especially React. If you
        (or your friend) are looking for someone who loves JavaScript, curious
        to learn new things and has terrible pun delivering skills then we
        should talk maybe?!
      </section>
      <section className="aboutme">
        You can also check my Resume by clicking below!
        <div className="resume-button">
          <a
            href="https://drive.google.com/file/d/1e99cb1xNc9KhHl-2X7V2uLf13Y2N_bwR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Resume
          </a>
        </div>
      </section>

      <section className="footer" />
    </div>
  );
};

export default AboutMe;
