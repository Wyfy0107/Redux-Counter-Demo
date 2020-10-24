//**Make new file for your reducer then */
//**combine all the reducers in here */
import {combineReducers} from 'redux'
import {counterReducer} from './counter'
const createRootReducer = () => combineReducers({
    counterReducer
});

export default createRootReducer;
