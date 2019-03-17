import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme-page-container">
      <section className="aboutme ">
        Oh you clicked! <span className="half-highlight">Awesome.</span>
      </section>
      <section className="aboutme">
        My name is <span className="half-highlight">Devansh</span>, I am a
        junior front end developer and I am from{" "}
        <span className="half-highlight">India</span>. Currently, I am pursuing
        my bachelor of technology in the field of Information and Communication
        Technology(4th year) at Dhirubhai Ambani Institute of Information and
        Communication Technology , Gandhinagar.
      </section>
      <section className="aboutme">
        Along with <span className="half-highlight">JavaScript</span> I love
        Cartoons, Superheroes and collecting Nerdy T-Shirts. I am currently
        experimenting <span className="half-highlight">React</span> and
        implementing some of my ideas. The other side of me is an Artist. I have
        been fond of drawing since my childhood and after getting introduced to
        Adobe Illustrator I try to represent my Ideas through{" "}
        <span className="half-highlight">Illustrations</span>. I am good at
        making puns and that is reflected in my Designs too. You can follow me
        on{" "}
        <a
          href="https://www.instagram.com/_devansaga_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#e14594", padding: 0, fontWeight: "bold" }}
        >
          Instagram
        </a>{" "}
        to get more hang of it.
      </section>
      <section className="aboutme">
        In my spare time, I would be mostly, watching{" "}
        <span className="half-highlight">Football</span> or participating in a{" "}
        <span className="half-highlight">Quiz</span> or scrolling on{" "}
        <a
          href="https://twitter.com/devanshdoesdab"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#34699a", padding: 0, fontWeight: "bold" }}
        >
          Twitter
        </a>{" "}
        or listening to{" "}
        <a
          href="http://www.thelocaltrain.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: 0, fontWeight: "bold" }}
        >
          The Local Train.
        </a>
      </section>
      <section className="aboutme">
        If you would like to say hello,
        <br />
        Feel free to Contact me{" "}
        <span className="half-highlight">@dnpurohit96@gmail.com</span>
      </section>
      <section className="aboutme">Bye!</section>
      <section className="footer" />
    </div>
  );
};

export default AboutMe;
