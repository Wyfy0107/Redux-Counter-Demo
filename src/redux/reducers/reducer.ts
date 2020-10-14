import { ActionTypes } from "../actions";

const initialState = {
  count: 0,
  input: 0,
};

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + state.input,
      };

    case "SUBTRACT":
      if ("payload" in action) {
        return {
          ...state,
          count: state.count - action.payload,
        };
      }
      break;

    case "INPUT_COMING":
      if ("payload" in action) {
        console.log(action.payload);
        return {
          ...state,
          input: action.payload,
        };
      }
      break;

    default:
      return state;
  }
};

export default reducer;
