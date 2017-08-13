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
      <div className={styles.container}>
        <h1>It Works!</h1>
        <p>
          OMG I'VE FINALLY CONFIGURED WEBPACK
        </p>
      </div>
    )
  }
}

export default connect((store, props) => {
  return {
    loaded: store.app.loaded,
  };
})(App);