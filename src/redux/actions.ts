type AddAction = {
  type: string;
};

type SubTractAction = {
  type: string;
  payload: number;
};

type InputAction = {
  type: string;
  payload: number;
};

type FetchMoviesAction = {
  type: string;
};

type FetchMoviesSuccessAction = {
  type: string;
  payload: any[];
};

export const add = (): AddAction => {
  return {
    type: "ADD",
  };
};

export const subtract = (num: number): SubTractAction => {
  return {
    type: "SUBTRACT",
    payload: num,
  };
};

export const deliverInput = (amount: number) => {
  return {
    type: "INPUT_COMING",
    payload: amount,
  };
};

export const fetchMovies = (): FetchMoviesAction => {
  return {
    type: "FETCH_MOVIES",
  };
};

export const fetchMoviesSuccess = (movies: any): FetchMoviesSuccessAction => {
  return {
    type: "FETCH_SUCCESS",
    payload: movies,
  };
};

export const fetchData = () => {
  return {
    type: "FETCH_FETCH_FETCH",
  };
};

export const deliverDataToReducer = (data: any) => {
  return {
    type: "DATA_RECEIVED",
    payload: data,
  };
};

//Trigger saga, deliver input to reducer
export const deliverUserInputToReducer = (input: string) => {
  return {
    type: "DELIVER_INPUT",
    payload: input,
  };
};

export type Response = {
  message: string;
  status: string;
};
//Deliver the request response to reducer
export const postInputSuccess = (response: Response) => {
  return {
    type: "POST_SUCCESS",
    payload: response,
  };
};

export type ActionTypes =
  | AddAction
  | SubTractAction
  | InputAction
  | FetchMoviesAction
  | FetchMoviesSuccessAction;
