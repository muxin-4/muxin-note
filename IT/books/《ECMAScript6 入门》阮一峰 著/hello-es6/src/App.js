import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import { firstName, lastName, year } from "./utils/module/profile";
import { multiply } from "./utils/module/profile";
// import { multiply as newMultiply } from './module/profile.js';
import { foo } from "./utils/module/profile";
// import { streamV1 } from "./utils/module/profile";

// import { area, circumference } from './utils/module/circle';
import * as circle  from './utils/module/circle';

// let a = 1;
// let [a, b, c] = [1, 2, 3];
// let [a, [[b], c]] = [1, [[2], 3]];

class App extends Component {
  constructor() {
    super();
    this.state = {
	  test: "",
    };
  }
  componentWillMount() {
    this.init();
  }
  init() {
    this.setState({ test: multiply(2, 3) });
    // this.setState({ test: streamV1(2, 3) });
	console.log("foo", foo);
	setTimeout(() => {
		console.log("foo1", foo);
	}, 500);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {/* Welcome to React {firstName} {lastName} {year} */}
            {this.state.test}<br/>
            {/* {area(4)}  {circumference(14)}<br/> */}
            {circle.area(4)}  {circle.circumference(14)}<br/>
          </h1>
        </header>
        <p className="App-intro">
		  {/* To get started, edit <code>src/App.js</code> and save to reload. */}
		  {a}<br/>
		  {b}<br/>
		  {c}<br/>
        </p>
      </div>
    );
  }
}

export default App;
