import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-page-container">
      <section className="aboutme ">Oh you clicked! Awesome.</section>
      <section className="aboutme">
        My name is Devansh, I am a Junior Frontend Developer from India.
        Currently, I am pursuing my bachelor of technology in the field of
        Information and Communication Technology(4th year) at Dhirubhai Ambani
        Institute of Information and Communication Technology , Gandhinagar.
      </section>
      <section className="aboutme">
        Along with JavaScript I love Cartoons, Superheroes and collecting Nerdy
        T-Shirts. I am currently exploring React and implementing some of my
        ideas. The other side of me is an Artist. I have been fond of drawing
        since my childhood and after getting introduced to Adobe Illustrator I
        try to represent my Ideas through Illustrations. I am good at making
        puns and that is reflected in my Designs too. You can check my{" "}
        <a
          href="https://www.instagram.com/_devansaga_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#e14594" }}
        >
          Instagram
        </a>{" "}
        to have a look at my designs and know more.
      </section>
      <section className="aboutme">
        In my spare time, I watch Football or participate in a Quiz or scroll
        through{" "}
        <a
          href="https://twitter.com/devanshdoesdab"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#5893d4" }}
        >
          Twitter
        </a>{" "}
        or listen to{" "}
        <a
          href="http://www.thelocaltrain.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#113f67" }}
        >
          The Local Train.
        </a>
      </section>
      <section className="aboutme">
        If you would like to say hello,
        <br />
        Feel free to Contact me{" "}
        <span className="bold">@dnpurohit96@gmail.com</span>
      </section>
      <section className="aboutme">
        You can also check my Resume by clicking below!
        <a
          href="https://drive.google.com/open?id=1kVUp6-RO0jgQ8I0JPRfK_lHd1F6hd3LL"
          target="_blank"
          rel="noopener noreferrer"
          id="resume-link"
        >
          Resume
        </a>
      </section>

      <section className="footer" />
    </div>
  );
};

export default AboutMe;
