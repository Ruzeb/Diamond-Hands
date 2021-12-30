import { combineReducers } from 'redux';
import stockListReducer from './stockListReducer';

export default combineReducers({
  stockList: stockListReducer,
});
