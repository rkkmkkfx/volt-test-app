import React, { Component } from 'react';
import { Col, Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import { connect } from 'react-redux';
import { toggleModal, selectItem, createItem, updateItem, fetchAll } from './../../../redux/actions/index';

import * as utils from './../../../utils';

class ModalEdit extends Component {
  saveItem(event, id) {
    const data = {};
    for (let key of this.props.scheme) {
      data[key] = event.target[key].value;
    }
    if (id) {
      this.props.updateItem(this.props.items.type, id, data);
    } else {
      this.props.createItem(this.props.items.type, data);
    }
    setTimeout(() => {
      this.props.fetchAll(this.props.items.type);
      this.closeModal();
    }, 1000);
  }

  closeModal() {
    this.props.selectItem(null);
    this.props.toggleModal(true, null);
  }

  renderForm(scheme, data) {
    if (scheme instanceof Array) {
      return scheme.map(key => { return(
        <FormGroup controlId={ key } key={ key }>
          <Col componentClass={ ControlLabel } sm={ 2 }>
            { utils.capitalizeFirstLetter(key) }
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder={ utils.capitalizeFirstLetter(key) } defaultValue={ (data) ? this.props.modal.data[key] : '' }/>
          </Col>
        </FormGroup>
      ) })
    }
  }

  render() {
    return (
      <Modal show={ (this.props.modal.isOpen && (this.props.modal.active === 'edit')) } onHide={ this.closeModal.bind(this) }>
        <Form horizontal onSubmit={event => {
          event.preventDefault();
          if (this.props.modal.data instanceof Object) {
            this.saveItem(event, this.props.modal.data.id)
          } else {
            this.saveItem(event);
          }
        }}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

              { this.renderForm(this.props.scheme, this.props.modal.data) }

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" type="submit">Save</Button>
            <Button onClick={ this.closeModal.bind(this) }>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { toggleModal, selectItem, createItem, updateItem, fetchAll } )( ModalEdit );
