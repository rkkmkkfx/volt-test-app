import React, { Component } from 'react';
import { Grid, Row, PageHeader, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchAll, selectThingType, toggleModal } from './../../../redux/actions/index';

import Item from './Item';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';

import * as utils from './../../../utils';

const typeScheme = {
  invoices: ['customer', 'discount', 'total', ''],
  products: ['name', 'price'],
  customers: ['name', 'address', 'phone']
}

class Index extends Component {
  returnThead(scheme) {
    return scheme.map(el => {return(<th key={ el }>{ utils.capitalizeFirstLetter(el) }</th>)})
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

  openModal() {
    this.props.toggleModal(false, 'edit');
  }

  render() {
    if (this.props.match.params.thingsType !== undefined) {
      let title = this.props.things.type || this.props.match.params.thingsType;
      if (title) {title = title.slice(0, -1)}
      if (this.props.things.data) {
        return(
          <Grid>
            <Row>
              <PageHeader>
                { utils.capitalizeFirstLetter(title) } List&nbsp;&nbsp;
                <small><Button onClick={ this.openModal.bind(this) }>Create</Button></small>
              </PageHeader>
              <Table>
                <thead>
                  <tr>
                    <th key="id">#</th>
                    { this.returnThead(typeScheme[this.props.things.type]) }
                  </tr>
                </thead>
                <tbody>{ this.returnThings(this.props.things) }</tbody>
              </Table>
              <ModalEdit scheme={ typeScheme[this.props.things.type] }/>
              <ModalDelete/>
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

export default connect( mapStateToProps, { fetchAll, selectThingType, toggleModal } )( Index );
