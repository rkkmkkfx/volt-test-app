import axios from 'axios';

export const FETCH_ALL = 'FETCH_ALL';
export const CREATE_THING = 'CREATE_THING';
export const UPDATE_THING = 'UPDATE_THING';
export const DELETE_THING = 'DELETE_THING';
export const SELECT_THING_TYPE = 'SELECT_THING_TYPE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SELECT_ITEM = 'SELECT_ITEM';
export const CONFIRM_DELETE = 'CONFIRM_DELETE';

const ROOT_URL = '/api';

export function selectThingType(thingType) {
  return {
    type: SELECT_THING_TYPE,
    payload: thingType
  }
}

export function fetchAll(thing) {
  const request = axios.get( `${ROOT_URL}/${thing}` );

  return {
    type: FETCH_ALL,
    payload: request
  }
}

export function createThing( thing, props ) {
  const request = axios.post( `${ROOT_URL}/${thing}`, props );

  return {
    type: CREATE_THING,
    payload: request
  }
}

export function updateThing( thing, id, props ) {
  const request = axios.put( `${ROOT_URL}/${thing}/${id}`, props );

  return {
    type: UPDATE_THING,
    payload: request
  }
}

export function deleteThing( thing, id ) {
  const request = axios.delete( `${ROOT_URL}/${thing}/${id}` );

  return {
    type   : DELETE_THING,
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