import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";

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
