import React, { Component } from "react";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import darkTheme from './tokens/themes/dark';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Designs from './pages/Designs/Designs';
import AboutMe from "./pages/AboutMe";
import Dashboard from "./pages/Dashboard/Dashboard";
import IMDP from "./pages/IMDP/IMDP";
import GridBackground from './assets/grid.svg';

import NarutoSeries from "./pages/Designs/series/NarutoSeries";
import MarioSeries from "./pages/Designs/series/MarioSeries";
import CartoonsSeries from "./pages/Designs/series/CartoonsSeries";
import GotgSeries from "./pages/Designs/series/GotgSeries";
import MBPSeries from "./pages/Designs/series/MBPSeries";
import RandomSeries from "./pages/Designs/series/RandomSeries";
import OnceAPunATimeSeries from './pages/Designs/series/OnceAPunATimeSeries';
import TopicalishSeries from "./pages/Designs/series/TopicalishSeries";
import SpecialDaysSeries from './pages/Designs/series/SpecialDaysSeries';
import MothersDaySeries from "./pages/Designs/series/MothersDaySeries";

const RootContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  
  &:after {
    content: '';
    background-image: url(${GridBackground});
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
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
                <Route path="/designs" exact component={Designs} />
                <Route path="/designs/naruto" exact component={NarutoSeries} />
                <Route path="/designs/cartoons" exact component={CartoonsSeries} />
                <Route path="/designs/mbp" exact component={MBPSeries} />
                <Route path="/designs/mario" exact component={MarioSeries} />
                <Route path="/designs/gotg" exact component={GotgSeries} />
                <Route path="/designs/misc" exact component={RandomSeries} />
                <Route path="/designs/onceapunatime" exact component={OnceAPunATimeSeries} />
                <Route path="/designs/topicalish" exact component={TopicalishSeries} />
                <Route path="/designs/specialdays" exact component={SpecialDaysSeries} />
                <Route path="/designs/mothersday" exact component={MothersDaySeries} />
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
