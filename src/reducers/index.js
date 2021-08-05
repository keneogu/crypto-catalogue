import { combineReducers } from 'redux';
import coin from './coin';
import currentCoin from './currentCoin';
import filter from './filter';

export default combineReducers({ coin, currentCoin, filter });
