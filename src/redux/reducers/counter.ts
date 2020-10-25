import { ADD, HANDLE_INPUT, MINUS, MULTIPLY } from "../constants";
import { ActionTypes, CounterState } from "../types";

const initialState: CounterState = {
  count: 0,
  input:0
}

const counter = (state = initialState, action: ActionTypes) => {
  switch (action.type) {

    case ADD: 
      return { 
        ...state,
        count: state.count + 1
      }
    
    case MINUS:
      return {
        ...state,
        count: state.count - 1
      }
    
    case HANDLE_INPUT:
      if('payload' in action)
      return {
        ...state,
        input: action.payload
      }
      
      break // not sure about this 'break', but it scaled through :)
    
      case MULTIPLY: 
      return {
        ...state,
        count: state.count * state.input
      }
    
      default: 
        return state
    }
}

export default counter