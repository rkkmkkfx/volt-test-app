import {combineReducers} from 'redux';
import ThingReducer from './main';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers( {
  things: ThingReducer,
  form: formReducer
} );

export default rootReducer;