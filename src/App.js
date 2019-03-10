import React, { Component } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
