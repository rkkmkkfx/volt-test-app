import React, { Component } from 'react';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

import { connect } from 'react-redux';
import { selectItem, confirmDelete, deleteItem, fetchAll, toggleModal } from './../../../redux/actions/index';

class Item extends Component {
  openItemModal(item) {
    this.props.selectItem(item, 'edit');
  }

  confirmDeleteItem(item) {
    this.props.confirmDelete(item);
    this.props.toggleModal(false, 'delete');
  }

  renderTableRow() {
    return this.props.scheme.map(key => {
      if (key === 'name') {
        return(<td key={ key }>
          { this.props.data[key] }&emsp;
          <ButtonGroup bsSize="xsmall">
            <Button bsStyle="primary" onClick={ this.openItemModal.bind(this, this.props.data) }><Glyphicon glyph="pencil"/></Button>
            <Button bsStyle="danger" onClick={ this.confirmDeleteItem.bind(this, this.props.data) }><Glyphicon glyph="remove"/></Button>
          </ButtonGroup>
        </td>)
      } else {
        return(<td key={ key }>{ this.props.data[key] }</td>)
      }
    })
  }
  render() {
    return (
      <tr>
        <td key={ this.props.data.id }>{ this.props.data.id }</td>
        { this.renderTableRow() }
      </tr>
    )
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { selectItem, confirmDelete, deleteItem, fetchAll, toggleModal } )( Item );