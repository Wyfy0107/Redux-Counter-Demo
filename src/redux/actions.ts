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

export type ActionTypes = AddAction | SubTractAction | InputAction;
