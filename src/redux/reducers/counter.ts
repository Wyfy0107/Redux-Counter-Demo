import { ADD } from "../constants";
import { ActionTypes, CounterState } from "../types";

const initialState: CounterState = {
  count: 0
}

const counter = (state = initialState, action: ActionTypes) => {
  switch (action.type) {

    case ADD: 
      return { 
        ...state,
        count: state.count + 1
      }
    
    default: 
      return state
  }
}

export default counter