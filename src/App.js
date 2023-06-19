import React, { Component } from "react";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import darkTheme from './tokens/themes/dark';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Designs from './pages/Designs';
import AboutMe from "./pages/AboutMe";
import Dashboard from "./pages/Dashboard/Dashboard";
import IMDP from "./pages/IMDP";
import GridBackground from './assets/grid.svg';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
  &:after {
    content: '';
    background-image: url(${GridBackground});
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -10;
  }
`;

const PageContainer = styled.div`
  position: relative;
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 16px;  
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <RootContainer className="root-container">
            <PageContainer>
              <Navbar />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutMe} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/designs" component={Designs} />
                <Route path="/imdp" component={IMDP} />
              </Switch>
            </PageContainer>
          </RootContainer>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
