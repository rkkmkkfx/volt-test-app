import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchAll, selectItemType } from './../../redux/actions/index';

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
          <LinkContainer to="/invoices">
            <NavItem>Invoices</NavItem>
          </LinkContainer>
          <LinkContainer to="/products">
            <NavItem>Products</NavItem>
          </LinkContainer>
          <LinkContainer to="/customers">
            <NavItem>Customers</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { fetchAll, selectItemType } )( Header );
