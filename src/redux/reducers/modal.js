import typeToReducer from 'type-to-reducer';

import { TOGGLE_MODAL, SELECT_ITEM, CONFIRM_DELETE } from './../actions';
const INITIAL_STATE = {
  data: null,
  isOpen: false,
  active: null
};

const ModalReducer = typeToReducer({
  [TOGGLE_MODAL]: (state, action) => ({ ...state, isOpen: !action.payload.isOpen, active: action.payload.active }),
  [SELECT_ITEM]: (state, action) => ({ ...state, data: action.payload.data, isOpen: action.payload.isOpen, active: action.payload.active }),
  [CONFIRM_DELETE]: (state, action) => ({ ...state, data: action.payload })
}, INITIAL_STATE);

export default ModalReducer;