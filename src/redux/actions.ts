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

export type ActionTypes =
  | AddAction
  | SubTractAction
  | InputAction
  | FetchMoviesAction
  | FetchMoviesSuccessAction;
