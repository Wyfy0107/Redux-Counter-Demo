//**Make new file for your reducer then */
//**combine all the reducers in here */

import { combineReducers } from 'redux';

import counter from './counter'

const createRootReducer = () => combineReducers({
counter
});

export default createRootReducer;
