import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import reducers from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise
)( createStore );

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app-root')
);