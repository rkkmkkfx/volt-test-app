import axios from 'axios';

export const FETCH_ALL = 'FETCH_ALL';
export const CREATE_THING = 'CREATE_THING';
export const FETCH_ONE = 'FETCH_ONE';
export const DELETE_THING = 'DELETE_THING';
export const SELECT_THING_TYPE = 'CHANGE_THING_TYPE';

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

export function fetchOne( thing, id ) {
  const request = axios.get( `${ROOT_URL}/${thing}/${id}` );

  return {
    type: FETCH_ONE,
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