import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from './store';
import routes from './routes';

render(
  <Provider store={store}>{routes}</Provider>,
  document.querySelector("#app")
);

if (module && module.hot) {
  module.hot.accept('./containers/app', () => {
    render(
      <Provider store={store}>{routes}</Provider>,
      document.querySelector('#app')
    );
  });
}