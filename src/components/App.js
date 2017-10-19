import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import history from './../utils';

import Header from './Header/Header';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <main>
          <Header/>
          <Content/>
        </main>
      </Router>
  )
  }
}

export default App;
