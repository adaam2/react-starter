import React from 'react';
import styles from './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>It Works!</h1>
        <p>
          OMG I'VE FINALLY CONFIGURED WEBPACK
        </p>
      </div>
    )
  }
}