//**Make new file for your reducer then */
//**combine all the reducers in here */
import { combineReducers } from 'redux';
import dogReducer from './dog';

const createRootReducer = () => combineReducers({ dog: dogReducer });

export default createRootReducer;
