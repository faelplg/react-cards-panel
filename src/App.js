import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
// import classes from './App.module.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Layout>
        <h1>React Flexbox Card Grid.</h1>
      </Layout>
    );
  }
}

export default App;
