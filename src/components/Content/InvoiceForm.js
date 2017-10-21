import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateItem, createItem } from './../../redux/actions/index';

class InvoiceForm extends Component {
  render() {
    return (
      <Grid>
        <Row>
          Invoice Form
        </Row>
      </Grid>

    )
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { updateItem, createItem } )( InvoiceForm );