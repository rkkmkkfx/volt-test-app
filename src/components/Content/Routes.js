import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import List from './List/List';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={List} path="/customers"/>
        <Route component={List} path="/products"/>
        <Route component={List} path="/"/>
      </Switch>

    )
  }
}

export default Routes;
