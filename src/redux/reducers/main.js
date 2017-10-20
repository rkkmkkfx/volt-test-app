import typeToReducer from 'type-to-reducer';

import { FETCH_ALL, SELECT_ITEM_TYPE } from './../actions';
const INITIAL_STATE = {
  data: null,
  type: null
};

const ItemsReducer = typeToReducer({
  [FETCH_ALL]: (state, action) => ({ ...state, data: action.payload.data }),
  [SELECT_ITEM_TYPE]: (state, action) => ({ ...state, type: action.payload})
  }, INITIAL_STATE);

export default ItemsReducer;