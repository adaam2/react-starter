import React from 'react';
import { connect }  from 'react-redux';

import { loadApp } from 'actions/app';
import styles from './app.scss';


type Props = {
  dispatch: () => void,
  loaded: boolean
}

class App extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.dispatch(loadApp());
  }

  render() {
    return (
      <header className={styles.container}>
        <h1>It Works!</h1>
        <p>
          Webpack is shit.
        </p>

        <h2>Second heading</h2>
      </header>
    )
  }
}

export default connect((store, props) => {
  return {
    loaded: store.app.loaded,
  };
})(App);