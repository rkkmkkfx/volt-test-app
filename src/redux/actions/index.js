import axios from 'axios';

export const FETCH_ALL = 'FETCH_ALL';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SELECT_ITEM_TYPE = 'SELECT_ITEM_TYPE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SELECT_ITEM = 'SELECT_ITEM';
export const CONFIRM_DELETE = 'CONFIRM_DELETE';

const ROOT_URL = '/api';

export function selectItemType(itemType) {
  return {
    type: SELECT_ITEM_TYPE,
    payload: itemType
  }
}

export function fetchAll(type) {
  const request = axios.get( `${ROOT_URL}/${type}` );

  return {
    type: FETCH_ALL,
    payload: request
  }
}

export function createItem( type, props ) {
  const request = axios.post( `${ROOT_URL}/${type}`, props );

  return {
    type: CREATE_ITEM,
    payload: request
  }
}

export function updateItem( type, id, props ) {
  const request = axios.put( `${ROOT_URL}/${type}/${id}`, props );

  return {
    type: UPDATE_ITEM,
    payload: request
  }
}

export function deleteItem( type, id ) {
  const request = axios.delete( `${ROOT_URL}/${type}/${id}` );

  return {
    type   : DELETE_ITEM,
    payload: request
  }
}

export function toggleModal( isOpen, active ) {
  return {
    type: TOGGLE_MODAL,
    payload: {isOpen: isOpen, active: active}
  }
}

export function selectItem( item, active ) {
  return {
    type: SELECT_ITEM,
    payload: {
      data: item,
      isOpen: true,
      active: active
    }
  }
}

export function confirmDelete( item ) {
  return {
    type: CONFIRM_DELETE,
    payload: item
  }
}