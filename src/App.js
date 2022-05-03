import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Designs from './pages/Designs';
import AboutMe from "./pages/AboutMe";
import OKRPage from './pages/OKRPage';
import "./App.css";
import Dashboard from "./pages/Dashboard";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutMe} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/designs" component={Designs} />
            <Route path="/goals" component={OKRPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
