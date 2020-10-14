import { ActionTypes } from "../actions";

type InitialState = {
  count: number;
  input: number;
  moviesList: any[];
};

const initialState: InitialState = {
  count: 0,
  input: 0,
  moviesList: [],
};

type Action = {
  type: string;
  payload: number | any[];
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
          count: state.count - (action.payload as number),
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

    case "FETCH_MOVIES":
      console.log("fired");
      return { ...state };

    case "FETCH_SUCCESS":
      console.log(action);
      if ("payload" in action)
        return {
          ...state,
          moviesList: action.payload,
        };
      break;

    default:
      return state;
  }
};

export default reducer;
