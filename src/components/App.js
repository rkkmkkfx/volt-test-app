import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header/>
          <Content/>
        </main>
      </Router>
  )
  }
}

export default App;
