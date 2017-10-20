import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import { history } from './../utils';

import Header from './Header/Header';
import Routes from './Content/Routes';

class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <main>
          <Header/>
          <Routes/>
        </main>
      </Router>
  )
  }
}

export default App;
