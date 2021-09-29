import {combineReducers} from 'redux';
import {appInteraction} from './app-interaction/app-interaction';
import {REDUSER_NAME} from '../const';

export default combineReducers({
  [REDUSER_NAME]: appInteraction,
});
