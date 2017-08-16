import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Card from './Components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card title="Our products" description="Lorem ipsum sit dolor amet consecuteur." />
      </div>
    );
  }
}

export default App;
