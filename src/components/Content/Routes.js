import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import List from './List/List';
import InvoiceForm from './InvoiceForm';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={InvoiceForm} path="/create"/>
        <Route component={List} path="/invoices"/>
        <Route component={List} path="/products"/>
        <Route component={List} path="/customers"/>
        <Route component={List} path="/"/>
      </Switch>

    )
  }
}

export default Routes;
