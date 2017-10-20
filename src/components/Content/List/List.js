import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Grid, Row, PageHeader, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchAll, selectItemType, toggleModal } from './../../../redux/actions/index';

import Item from './Item';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';

import { history, capitalizeFirstLetter } from './../../../utils';


const typeScheme = {
  invoices: ['customer', 'discount', 'total', ''],
  products: ['name', 'price'],
  customers: ['name', 'address', 'phone']
}

class List extends Component {
  renderThead(scheme) {
    return scheme.map(el => {return(<th key={ el }>{ capitalizeFirstLetter(el) }</th>)})
  }

  renderItems(items) {
    if (items.data instanceof Array) {
      return items.data.map(item => {
        return(<Item key={item.id} data = { item } scheme = {typeScheme[items.type]}/>);
      })
    }
  }

  loadData(location) {
    this.props.selectItemType(location);
    this.props.fetchAll(location);
  }

  componentDidMount() {
    history.listen((location, action) => {
      this.loadData(location.pathname.substr(1));
    });
    this.loadData(history.location.pathname.substr(1));
  }

  openModal() {
    this.props.toggleModal(false, 'edit');
  }

  render() {
    const type = this.props.match.path.substr(1);
    if (type) {
      const title = capitalizeFirstLetter(type.slice(0, -1)) + ' List';
      if (this.props.items.data instanceof Array) {
        return(
          <Grid>
            <Row>
              <DocumentTitle title={ title }>
                <PageHeader>
                  { title }
                  &nbsp;&nbsp;
                  <small><Button onClick={ this.openModal.bind(this) }>Create</Button></small>
                </PageHeader>
              </DocumentTitle>
              <Table>
                <thead>
                  <tr>
                    <th key="id">#</th>
                    { this.renderThead(typeScheme[type]) }
                  </tr>
                </thead>
                <tbody>{ this.renderItems(this.props.items) }</tbody>
              </Table>
              <ModalEdit scheme={ typeScheme[type] }/>
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
      return(<Grid><DocumentTitle title='Home'><PageHeader>Hello!</PageHeader></DocumentTitle></Grid>)
    }
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { fetchAll, selectItemType, toggleModal } )( List );
