import React, { Component } from 'react';
import { Col, Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import { connect } from 'react-redux';
import { toggleModal, selectItem, deleteThing, fetchAll } from './../../../redux/actions/index';

class ModalDelete extends Component {
  closeModal() {
    this.props.selectItem(null);
    this.props.toggleModal(true, null);
  }

  deleteItem(id) {
    this.props.deleteThing(this.props.things.type, id);
    setTimeout(() => {
      this.props.fetchAll(this.props.things.type);
      this.closeModal();
    }, 1000);
  }

  render() {
    const item = this.props.modal.data;
    if (item instanceof Object) {
      return (
        <Modal show={ (this.props.modal.isOpen && (this.props.modal.active === 'delete')) } onHide={ this.closeModal.bind(this) }>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Delete {item.name}?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={ this.deleteItem.bind(this, item.id) }>Yes</Button>
            <Button bsStyle="success" onClick={ this.closeModal.bind(this) }>No</Button>
          </Modal.Footer>
        </Modal>
      )
    } else {
      return(<div/>)
    }
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { toggleModal, selectItem, deleteThing, fetchAll } )( ModalDelete );
