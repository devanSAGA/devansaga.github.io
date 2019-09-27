import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Designs from "./pages/Designs";
import Work from "./pages/Work";
import BlogsIFollow from "./pages/BlogsIFollow";
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
            <Route path="/work" component={Work} />
            <Route path="/designs" exact component={Designs} />
            <Route path="/blogs-i-follow" exact component={BlogsIFollow} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
