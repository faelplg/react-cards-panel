import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";

import classes from "./App.module.scss";

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
        <main className={classes.App}>
          <h1>Cards panel</h1>
          <div className={classes.Panel}>
            <div className={classes.Card}>
              <h2>Título</h2>
            </div>
            <div className={classes.Card}>
              <h2>Título</h2>
            </div>
            <div className={classes.Card}>
              <h2>Título</h2>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default App;
