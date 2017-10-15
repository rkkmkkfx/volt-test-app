import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchAll, selectThingType } from './../../redux/actions/index';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a>InvoiceApp</a>
            </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/invoices" onClick={ this.handleClick.bind(this) }>
            <NavItem>Invoices</NavItem>
          </LinkContainer>
          <LinkContainer to="/products" onClick={ this.handleClick.bind(this) }>
            <NavItem>Products</NavItem>
          </LinkContainer>
          <LinkContainer to="/customers" onClick={ this.handleClick.bind(this) }>
            <NavItem>Customers</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }

  handleClick(event) {
    const urlToArray = event.target.href.split('/');
    const thing = urlToArray[urlToArray.length - 1];
    this.props.selectThingType(thing);
    this.props.fetchAll(thing);
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { fetchAll, selectThingType } )( Header );
