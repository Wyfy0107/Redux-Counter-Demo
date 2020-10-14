import reducer from "./reducer";
import reducer1 from "./reducer1";

import { combineReducers } from "redux";

const createRootReducer = () =>
  combineReducers({ first: reducer, second: reducer1 });

export default createRootReducer;
