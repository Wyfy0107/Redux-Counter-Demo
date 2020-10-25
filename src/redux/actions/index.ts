//**All actions stay here*/
//**Actions types will also be in the types.ts file */

import { ADD, MINUS, HANDLE_INPUT, MULTIPLY } from './../constants/index';
import { ActionTypes } from "../types";

export const addAction = (): ActionTypes => {
  return { 
    type: ADD
  }
}

export const minusAction = (): ActionTypes => {
  return {
    type: MINUS
  }
}

export const handleInputChange = (input: number): ActionTypes => {
  return {
    type: HANDLE_INPUT,
    payload: input
  }
}

export const multiplyAction = (input: number): ActionTypes => {
  return {
    type: MULTIPLY,
    payload: input
  }
}