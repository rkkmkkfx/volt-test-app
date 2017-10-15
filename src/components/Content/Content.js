import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Index from './Index/Index';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route component={Index} path="/:thingsType"/>
        <Route component={Index} path="/"/>
      </Switch>

    )
  }
}

export default Content;
