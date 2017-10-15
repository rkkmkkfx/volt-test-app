import React, { Component } from 'react';
import { Grid, Row, PageHeader, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchAll, selectThingType } from './../../../redux/actions/index';

import Item from './Item';

function capitalizeFirstLetter(string) {
  return (string) ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}

const typeScheme = {
  invoices: ['id', 'customer', 'discount', 'total', ''],
  products: ['id', 'name', 'price'],
  customers: ['id', 'name', 'address', 'phone']
}

class Index extends Component {
  returnThead(scheme) {
    return scheme.map(el => {return((el !== 'id') ? <th key={ el }>{ capitalizeFirstLetter(el) }</th> : <th key={ el }>#</th>)})
  }

  returnThings(things) {
    if (things.data instanceof Array) {
      return things.data.map(item => {
        return(<Item key={item.id} data = { item } scheme = {typeScheme[things.type]}/>);
      })
    }
  }

  componentWillMount() {
    this.props.selectThingType(this.props.match.params.thingsType);
    this.props.fetchAll(this.props.match.params.thingsType);
  }

  render() {
    if (this.props.match.params.thingsType !== undefined) {
      let title = this.props.things.type || this.props.match.params.thingsType;
      if (title) title = title.slice(0, -1);
      if (this.props.things.data) {
        return(
          <Grid>
            <Row>
              <PageHeader>{ capitalizeFirstLetter(title) } List</PageHeader>
              <Table>
                <thead><tr>{ this.returnThead(typeScheme[this.props.things.type]) }</tr></thead>
                <tbody>{ this.returnThings(this.props.things) }</tbody>
              </Table>
            </Row>
          </Grid>
        )
      } else {
        return(
          <div>Loading...</div>
        )
      }
    } else {
      return(<Grid><PageHeader>Hello!</PageHeader></Grid>)
    }
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { fetchAll, selectThingType } )( Index );
