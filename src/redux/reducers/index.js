import {combineReducers} from 'redux';
import ThingReducer from './main';
import ModalReducer from './modal';

const rootReducer = combineReducers({
  things: ThingReducer,
  modal: ModalReducer
});

export default rootReducer;