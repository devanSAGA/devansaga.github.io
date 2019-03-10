import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Designs from "./components/Designs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutMe} />
            <Route path="/designs" exact component={Designs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
