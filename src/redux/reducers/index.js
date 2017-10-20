import {combineReducers} from 'redux';
import ItemsReducer from './main';
import ModalReducer from './modal';

const rootReducer = combineReducers({
  items: ItemsReducer,
  modal: ModalReducer
});

export default rootReducer;