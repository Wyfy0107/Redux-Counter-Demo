import { ADD, HANDLE_INPUT, MINUS, MULTIPLY , INCREASE_BY, DECREASE_BY} from "../constants";
import { ActionTypes, CounterState } from "../types";

const initialState: CounterState = {
  count: 0,
  input: 0,
  increaseBy: 1,
  decreaseBy: 1,
  
}

const counter = (state = initialState, action: ActionTypes) => {
  switch (action.type) {

    case ADD: 
      return { 
        ...state,
        count: state.count + state.increaseBy
      }
    
    case MINUS:
      return {
        ...state,
        count: state.count - state.decreaseBy
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
    
    case INCREASE_BY: 
    if('payload' in action)
      return {
        ...state,
        increaseBy: action.payload,
      }

      break
      case DECREASE_BY: 
      if('payload' in action)
        return {
          ...state,
          decreaseBy: action.payload,
        }
    
      break
      default: 
        return state
    }
}

export default counter