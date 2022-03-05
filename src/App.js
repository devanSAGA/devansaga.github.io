import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import OKRPage from './pages/OKRPage';
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
            <Route path="/goals" component={OKRPage} />
          </Switch>
          <BackgroundCanvas />
        </div>
      </BrowserRouter>
    );
  }
}

function BackgroundCanvas() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let time = 0;
    let animationFrameId;

    const color = function (x, y, r, g, b) {
        context.fillStyle = `rgb(${r}, ${g}, ${b})`;
        context.fillRect(x, y, 1, 1);
    }

    const R = function (x, y, time) {
        return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time)));
    }

    const G = function (x, y, time) {
        return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
    }

    const B = function (x, y, time) {
        return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    }

    const startAnimation = function () {
        for (let x = 0; x <= 30; x++) {
            for (let y = 0; y <= 30; y++) {
                color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
            }
        }
        time = time + 0.120;
        animationFrameId = window.requestAnimationFrame(startAnimation);
    }
    startAnimation()
   
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, []);

  return (
    <canvas ref={canvasRef} className="background-gradient" width="32" height="32"></canvas>
  );
}

export default App;

